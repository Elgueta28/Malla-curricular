document.addEventListener('DOMContentLoaded', () => {
    // Definición de los ramos por semestre
    const semesters = {
        'Semestre 1': [
            'morfología integral',
            'química General y orgánica',
            'biología celular',
            'razonamiento matemático',
            'bases teorías de enfermería'
        ],
        'Semestre 2': [
            'microbiologia',
            'bioquímica',
            'Psicológia evolutiva',
            'socioantropologia',
            'bases del cuidado de enfermería',
            'CFG: habilidades comunicativas'
        ],
        'Semestre 3': [
            'fisiología',
            'salud pública 1',
            'enfermería en la promoción y Prevención en salud',
            'cuidado de enfermería en el ciclo vital',
            'ingles 1'
        ],
        'Semestre 4': [
            'fisiopatologia',
            'fármacologia general',
            'salud publica 2',
            'bases de enfermería en salud familiar y comunitaria',
            'cuidado de enfermería en adulto y adulto mayor',
            'ingles 2'
        ],
        'Semestre 5': [
            'farmacologia clinica y fármacovigilancia',
            'cuidados de enfermería en salud familiar',
            'cuidado de enfermería en el niño y adulto',
            'fundamentos de gestión y liderazgo en enfermería',
            'integrador 1: cuidado de enfermería 1',
            'ingles 3'
        ],
        'Semestre 6': [
            'cuidados de enfermería en salud mental y comunidad',
            'cuidado de enfermería en el Adulto y adulto mayor con alteraciones de salud',
            'metodos de analisis en enfermería',
            'administración en unidades de enfermería',
            'ingles 4',
            'CFG: razonamiento científico y tecnológias de información'
        ],
        'Semestre 7': [
            'ética y legislación en enfermería',
            'cuidados de enfermería en salud familiar y comunitario',
            'cuidado de enfermería en el niño y adolescente con alteraciones de la salud',
            'desarrollo de proyectos en enfermería',
            'CFG: pensamiento critico'
        ],
        'Semestre 8': [
            'cuidado integral del niño y adulto',
            'seminario de investigación en enfermería',
            'integrador 2: cuidado de enfermería 2',
            'CFG: responsabilidad social'
        ],
        'Semestre 9': [
            'integrador 3: gestión del cuidado en unidades de enfermería'
        ],
        'Semestre 10': [
            'integrador 4: gestión del cuidado en salud familiar y comunitaria'
        ]
    };

    // Definición de los requisitos de los ramos
    const requirements = {
        'microbiologia': ['biología celular'],
        'bioquímica': ['biología celular'],
        'bases del cuidado de enfermería': ['morfología integral', 'bases teorías de enfermería'],
        'fisiología': ['morfología integral'],
        'salud pública 1': ['razonamiento matemático', 'bases del cuidado de enfermería'],
        'enfermería en la promoción y Prevención en salud': ['bases teorías de enfermería', 'socioantropologia'],
        'cuidado de enfermería en el ciclo vital': ['Psicológia evolutiva', 'bases del cuidado de enfermería'],
        'fisiopatologia': ['fisiología'],
        'fármacologia general': ['microbiologia', 'bioquímica'],
        'salud publica 2': ['salud pública 1', 'enfermería en la promoción y Prevención en salud'],
        'bases de enfermería en salud familiar y comunitaria': ['enfermería en la promoción y Prevención en salud'],
        'cuidado de enfermería en adulto y adulto mayor': ['fisiología', 'cuidado de enfermería en el ciclo vital'],
        'ingles 2': ['ingles 1'],
        'farmacologia clinica y fármacovigilancia': ['fisiopatologia', 'fármacologia general'],
        'cuidados de enfermería en salud familiar': ['salud publica 2', 'bases de enfermería en salud familiar y comunitaria'],
        'cuidado de enfermería en el niño y adulto': ['fisiopatologia', 'cuidado de enfermería en adulto y adulto mayor'],
        'fundamentos de gestión y liderazgo en enfermería': ['salud publica 2'],
        'integrador 1: cuidado de enfermería 1': [
            'fisiopatologia',
            'fármacologia general',
            'salud publica 2',
            'bases de enfermería en salud familiar y comunitaria',
            'cuidado de enfermería en adulto y adulto mayor',
            'CFG: habilidades comunicativas'
        ],
        'ingles 3': ['ingles 2'],
        'cuidados de enfermería en salud mental y comunidad': ['cuidados de enfermería en salud familiar', 'integrador 1: cuidado de enfermería 1'],
        'cuidado de enfermería en el Adulto y adulto mayor con alteraciones de salud': [
            'farmacologia clinica y fármacovigilancia',
            'cuidado de enfermería en el niño y adulto',
            'integrador 1: cuidado de enfermería 1'
        ],
        'metodos de analisis en enfermería': ['fundamentos de gestión y liderazgo en enfermería', 'cuidado de enfermería en adulto y adulto mayor'],
        'administración en unidades de enfermería': ['fundamentos de gestión y liderazgo en enfermería'],
        'ingles 4': ['ingles 3'],
        'CFG: razonamiento científico y tecnológias de información': ['CFG: habilidades comunicativas'],
        'ética y legislación en enfermería': ['integrador 1: cuidado de enfermería 1'],
        'cuidados de enfermería en salud familiar y comunitario': ['cuidados de enfermería en salud mental y comunidad'],
        'cuidado de enfermería en el niño y adolescente con alteraciones de la salud': ['cuidado de enfermería en el niño y adulto', 'integrador 1: cuidado de enfermería 1'],
        'desarrollo de proyectos en enfermería': ['administración en unidades de enfermería'],
        'CFG: pensamiento critico': ['CFG: razonamiento científico y tecnológias de información'],
        'cuidado integral del niño y adulto': [
            'ética y legislación en enfermería',
            'cuidado de enfermería en el Adulto y adulto mayor con alteraciones de salud',
            'cuidado de enfermería en el niño y adolescente con alteraciones de la salud'
        ],
        'seminario de investigación en enfermería': ['ética y legislación en enfermería', 'metodos de analisis en enfermería', 'ingles 4'],
        'integrador 2: cuidado de enfermería 2': [
            'ética y legislación en enfermería',
            'cuidado de enfermería en salud familiar y comunitario',
            'cuidado de enfermería en el Adulto y adulto mayor con alteraciones de salud',
            'cuidado de enfermería en el niño y adolescente con alteraciones de la salud',
            'desarrollo de proyectos en enfermería'
        ],
        'CFG: responsabilidad social': ['CFG: pensamiento critico'],
        'integrador 3: gestión del cuidado en unidades de enfermería': [
            'cuidado integral del niño y adulto',
            'seminario de investigación en enfermería',
            'integrador 2: cuidado de enfermería 2',
            'CFG: responsabilidad social'
        ],
        'integrador 4: gestión del cuidado en salud familiar y comunitaria': [
            'cuidado integral del niño y adulto',
            'seminario de investigación en enfermería',
            'integrador 2: cuidado de enfermería 2',
            'CFG: responsabilidad social'
        ]
    };

    const curriculumGrid = document.getElementById('curriculum-grid');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const requiredCoursesList = document.getElementById('required-courses-list');

    // Cargar el estado de los ramos aprobados desde el almacenamiento local
    let approvedCourses = JSON.parse(localStorage.getItem('approvedCourses')) || [];

    /**
     * Renderiza la malla curricular en la página.
     */
    function renderCurriculum() {
        curriculumGrid.innerHTML = ''; // Limpiar el contenido existente

        for (const semesterName in semesters) {
            const semesterDiv = document.createElement('div');
            semesterDiv.classList.add('semester');

            const semesterTitle = document.createElement('h2');
            semesterTitle.textContent = semesterName;
            semesterDiv.appendChild(semesterTitle);

            const courseListUl = document.createElement('ul');
            courseListUl.classList.add('course-list');

            semesters[semesterName].forEach(course => {
                const courseItemLi = document.createElement('li');
                courseItemLi.classList.add('course-item');
                courseItemLi.textContent = course;
                courseItemLi.dataset.courseName = course; // Almacena el nombre del ramo en un atributo de datos

                // Marcar como aprobado si ya está en la lista de aprobados
                if (approvedCourses.includes(course)) {
                    courseItemLi.classList.add('approved');
                }

                // Añadir evento de clic para marcar/desmarcar
                courseItemLi.addEventListener('click', () => toggleCourseApproval(courseItemLi));

                courseListUl.appendChild(courseItemLi);
            });

            semesterDiv.appendChild(courseListUl);
            curriculumGrid.appendChild(semesterDiv);
        }
        updateBlockedCourses(); // Actualizar el estado de los ramos bloqueados después de renderizar
    }

    /**
     * Alterna el estado de aprobación de un ramo.
     * @param {HTMLElement} courseElement - El elemento DOM del ramo.
     */
    function toggleCourseApproval(courseElement) {
        const courseName = courseElement.dataset.courseName;

        if (courseElement.classList.contains('approved')) {
            // Desaprobar el ramo
            approvedCourses = approvedCourses.filter(c => c !== courseName);
            courseElement.classList.remove('approved');
        } else {
            // Intentar aprobar el ramo
            const missingRequirements = checkRequirements(courseName);
            if (missingRequirements.length === 0) {
                approvedCourses.push(courseName);
                courseElement.classList.add('approved');
            } else {
                showBlockedModal(missingRequirements);
            }
        }
        // Guardar el estado actualizado y volver a renderizar para actualizar los estados bloqueados
        saveApprovedCourses();
        updateBlockedCourses();
    }

    /**
     * Verifica si todos los requisitos de un ramo están aprobados.
     * @param {string} courseName - El nombre del ramo a verificar.
     * @returns {string[]} Un array de ramos requeridos que faltan por aprobar.
     */
    function checkRequirements(courseName) {
        const required = requirements[courseName] || [];
        const missing = [];
        required.forEach(req => {
            if (!approvedCourses.includes(req)) {
                missing.push(req);
            }
        });
        return missing;
    }

    /**
     * Muestra el modal con la lista de ramos requeridos no aprobados.
     * @param {string[]} missingCourses - Array de nombres de ramos faltantes.
     */
    function showBlockedModal(missingCourses) {
        requiredCoursesList.innerHTML = ''; // Limpiar la lista anterior
        missingCourses.forEach(course => {
            const listItem = document.createElement('li');
            listItem.textContent = course;
            requiredCoursesList.appendChild(listItem);
        });
        modal.style.display = 'flex'; // Mostrar el modal
    }

    /**
     * Actualiza visualmente los ramos que están bloqueados (sin requisitos cumplidos).
     */
    function updateBlockedCourses() {
        const allCourseElements = document.querySelectorAll('.course-item');
        allCourseElements.forEach(courseElement => {
            const courseName = courseElement.dataset.courseName;
            if (!approvedCourses.includes(courseName)) { // Solo si el ramo no está ya aprobado
                const missingRequirements = checkRequirements(courseName);
                if (missingRequirements.length > 0) {
                    courseElement.classList.add('blocked');
                } else {
                    courseElement.classList.remove('blocked');
                }
            } else {
                courseElement.classList.remove('blocked'); // Un ramo aprobado no puede estar bloqueado
            }
        });
    }

    /**
     * Guarda el estado de los ramos aprobados en el almacenamiento local del navegador.
     */
    function saveApprovedCourses() {
        localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
    }

    // Event listeners para el modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Ocultar el modal al hacer clic en la "x"
    });

    // Ocultar el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Inicializar la malla al cargar la página
    renderCurriculum();
});

