// src/scripts/catalogoFiltros.ts
export function initCatalogo(): void {
  const BATCH_SIZE = 6;
  let limiteActual = BATCH_SIZE;

  const inputBuscador = document.getElementById('buscador-productos') as HTMLInputElement | null;
  const botonesCategoria = document.querySelectorAll<HTMLButtonElement>('.btn-categoria');
  const tarjetas = Array.from(document.querySelectorAll<HTMLElement>('.tarjeta-item'));
  const sinResultados = document.getElementById('sin-resultados');
  const contador = document.getElementById('contador-resultados');
  const btnLimpiar = document.getElementById('btn-limpiar');
  const sentinel = document.getElementById('scroll-sentinel');
  const indicador = document.getElementById('cargando-indicador');

  if (!inputBuscador || tarjetas.length === 0) return;

  let categoriaSeleccionada = 'todas';
  let tarjetasFiltradas: HTMLElement[] = [];

  function actualizarVisibilidad(): void {
    const query = inputBuscador!.value.trim().toLowerCase();

    tarjetasFiltradas = tarjetas.filter((tarjeta) => {
      const searchData = tarjeta.getAttribute('data-search') || '';
      const categoriesData = (tarjeta.getAttribute('data-categories') || '').split('|');

      const coincideTexto = query === '' || searchData.includes(query);
      const coincideCategoria = categoriaSeleccionada === 'todas' || categoriesData.includes(categoriaSeleccionada);

      return coincideTexto && coincideCategoria;
    });

    tarjetas.forEach(t => t.classList.add('hidden'));

    const visiblesAhora = tarjetasFiltradas.slice(0, limiteActual);
    visiblesAhora.forEach(t => t.classList.remove('hidden'));

    const hayMas = limiteActual < tarjetasFiltradas.length;
    if (indicador) {
      indicador.classList.toggle('hidden', !hayMas);
    }

    if (contador) {
      contador.textContent = `${tarjetasFiltradas.length} ${tarjetasFiltradas.length === 1 ? 'producto encontrado' : 'productos encontrados'}`;
    }

    const hayFiltrosActivos = query !== '' || categoriaSeleccionada !== 'todas';
    if (btnLimpiar) btnLimpiar.classList.toggle('hidden', !hayFiltrosActivos);
    if (sinResultados) sinResultados.classList.toggle('hidden', tarjetasFiltradas.length > 0);
  }

  function cargarMasTanda(): void {
    if (limiteActual < tarjetasFiltradas.length) {
      limiteActual += BATCH_SIZE;
      actualizarVisibilidad();
    }
  }

  if (sentinel && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        cargarMasTanda();
      }
    }, { rootMargin: '100px' });

    observer.observe(sentinel);
  }

  inputBuscador.addEventListener('input', () => {
    limiteActual = BATCH_SIZE;
    actualizarVisibilidad();
  });

  botonesCategoria.forEach((btn) => {
    btn.addEventListener('click', () => {
      botonesCategoria.forEach((b) => {
        b.classList.remove('bg-purple-950', 'text-white');
        b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
      });

      btn.classList.remove('bg-white', 'text-slate-600', 'border', 'border-slate-200');
      btn.classList.add('bg-purple-950', 'text-white');

      categoriaSeleccionada = btn.getAttribute('data-category') || 'todas';
      limiteActual = BATCH_SIZE;
      actualizarVisibilidad();
    });
  });

  btnLimpiar?.addEventListener('click', () => {
    inputBuscador.value = '';
    categoriaSeleccionada = 'todas';

    botonesCategoria.forEach((b) => {
      const esTodas = b.getAttribute('data-category') === 'todas';
      if (esTodas) {
        b.classList.remove('bg-white', 'text-slate-600', 'border', 'border-slate-200');
        b.classList.add('bg-purple-950', 'text-white');
      } else {
        b.classList.remove('bg-purple-950', 'text-white');
        b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
      }
    });

    limiteActual = BATCH_SIZE;
    actualizarVisibilidad();
    inputBuscador.focus();
  });

  actualizarVisibilidad();
}