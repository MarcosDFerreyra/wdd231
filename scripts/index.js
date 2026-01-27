const currentYear = new Date().getFullYear();
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
    
});

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;

const coursesContainer = document.getElementById('courses-container');
const creditsElement = document.getElementById('credits');

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        completed: false
    }
];


function displayCourses(courseList) {
    coursesContainer.innerHTML = '';

    courseList.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');

        if (course.completed) {
            card.classList.add('completed');
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
        `;
        coursesContainer.appendChild(card);
    });

    const totalCredits = courseList.reduce((sum, course) => {
        return sum + course.credits;
    }, 0);

    creditsElement.textContent = `Total Credits: ${totalCredits}`;
}

document.getElementById('all').addEventListener('click', () => {
    displayCourses(courses);
});

document.getElementById('wdd').addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
});

document.getElementById('cse').addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
});

displayCourses(courses);

