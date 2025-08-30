// Variables globales
let currentSort = { column: null, direction: 'asc' };
let allRows = [];

// Función para acceder a máquinas
function accessMachine(machineId) {
    alert(`Iniciando acceso a la máquina: ${machineId.toUpperCase()}\n\nFuncionalidad en desarrollo.`);
}

// Función para ver detalles de máquina
function viewMachineDetails(machineId) {
    window.location.href = `machine-details.html?id=${machineId}`;
}

// Función para inicializar ordenamiento
function initSorting() {
    const sortableHeaders = document.querySelectorAll('.sortable');
    
    sortableHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const column = this.dataset.sort;
            sortTable(column);
        });
    });
}

// Función para ordenar tabla
function sortTable(column) {
    const tbody = document.getElementById('machines-tbody');
    const rows = Array.from(tbody.querySelectorAll('tr:not(.hidden)'));
    
    // Determinar dirección de ordenamiento
    if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort.direction = 'asc';
    }
    currentSort.column = column;
    
    // Actualizar indicadores visuales
    updateSortIndicators(column);
    
    // Ordenar filas
    rows.sort((a, b) => {
        let valueA, valueB;
        
        switch(column) {
            case 'name':
                valueA = a.querySelector('.machine-name strong').textContent.toLowerCase();
                valueB = b.querySelector('.machine-name strong').textContent.toLowerCase();
                break;
            case 'difficulty':
                const diffOrder = { 'easy': 1, 'medium': 2, 'hard': 3 };
                valueA = diffOrder[a.dataset.difficulty];
                valueB = diffOrder[b.dataset.difficulty];
                break;
            case 'os':
                valueA = a.dataset.os;
                valueB = b.dataset.os;
                break;
            case 'time':
                valueA = parseFloat(a.querySelector('[data-sort-value]').dataset.sortValue);
                valueB = parseFloat(b.querySelector('[data-sort-value]').dataset.sortValue);
                break;
            case 'rating':
                valueA = parseFloat(a.querySelector('[data-sort-value]').dataset.sortValue);
                valueB = parseFloat(b.querySelector('[data-sort-value]').dataset.sortValue);
                break;
            default:
                return 0;
        }
        
        if (valueA < valueB) return currentSort.direction === 'asc' ? -1 : 1;
        if (valueA > valueB) return currentSort.direction === 'asc' ? 1 : -1;
        return 0;
    });
    
    // Reordenar elementos en el DOM
    rows.forEach(row => tbody.appendChild(row));
}

// Función para actualizar indicadores de ordenamiento
function updateSortIndicators(activeColumn) {
    const headers = document.querySelectorAll('.sortable');
    
    headers.forEach(header => {
        header.classList.remove('asc', 'desc');
        if (header.dataset.sort === activeColumn) {
            header.classList.add(currentSort.direction);
        }
    });
}

// Función para filtrar tabla
function filterTable() {
    const difficultyFilter = document.getElementById('difficulty-filter').value;
    const osFilter = document.getElementById('os-filter').value;
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    const rows = document.querySelectorAll('#machines-tbody tr');
    let visibleCount = 0;
    
    rows.forEach(row => {
        const difficulty = row.dataset.difficulty;
        const os = row.dataset.os;
        const machineName = row.querySelector('.machine-name strong').textContent.toLowerCase();
        const machineDesc = row.querySelector('.machine-name small').textContent.toLowerCase();
        
        // Verificar filtros
        let showRow = true;
        
        // Filtro de dificultad
        if (difficultyFilter && difficulty !== difficultyFilter) {
            showRow = false;
        }
        
        // Filtro de OS
        if (osFilter && os !== osFilter) {
            showRow = false;
        }
        
        // Filtro de búsqueda
        if (searchTerm) {
            const matchesSearch = machineName.includes(searchTerm) || 
                                machineDesc.includes(searchTerm);
            if (!matchesSearch) {
                showRow = false;
            }
        }
        
        // Mostrar u ocultar fila
        if (showRow) {
            row.classList.remove('hidden');
            visibleCount++;
        } else {
            row.classList.add('hidden');
        }
    });
    
    // Actualizar contador
    updateRowCount(visibleCount);
}

// Función para actualizar contador de filas
function updateRowCount(visibleCount) {
    const totalCount = document.querySelectorAll('#machines-tbody tr').length;
    document.getElementById('showing-count').textContent = visibleCount;
    document.getElementById('total-count').textContent = totalCount;
}

// Función para inicializar filtros
function initFilters() {
    const difficultyFilter = document.getElementById('difficulty-filter');
    const osFilter = document.getElementById('os-filter');
    const searchInput = document.getElementById('search-input');
    
    // Event listeners para filtros
    difficultyFilter.addEventListener('change', filterTable);
    osFilter.addEventListener('change', filterTable);
    
    // Event listener para búsqueda con delay
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterTable, 300);
    });
}

// Función para inicializar keyboard shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl + F para buscar
        if (e.ctrlKey && e.key === 'f') {
            e.preventDefault();
            document.getElementById('search-input').focus();
        }
        
        // Escape para limpiar búsqueda
        if (e.key === 'Escape') {
            const searchInput = document.getElementById('search-input');
            if (searchInput === document.activeElement) {
                searchInput.value = '';
                searchInput.blur();
                filterTable();
            }
        }
    });
}

// Función para añadir efectos hover mejorados
function enhanceTableInteraction() {
    const rows = document.querySelectorAll('#machines-tbody tr');
    
    rows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Función principal de inicialización
function initializeTable() {
    // Inicializar todas las funcionalidades
    initSorting();
    initFilters();
    initKeyboardShortcuts();
    enhanceTableInteraction();
    
    // Contar filas iniciales
    const totalRows = document.querySelectorAll('#machines-tbody tr').length;
    updateRowCount(totalRows);
    
    console.log('Tabla de máquinas inicializada correctamente');
}

// Event listener principal
document.addEventListener('DOMContentLoaded', function() {
    initializeTable();
}); 