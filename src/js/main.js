document.addEventListener("DOMContentLoaded", () => {
	// Includes
	// @include('components/_variables.js');
	// @include('resources/_scrollLockIOS.js');
	// @include('resources/_animateOnScroll.js');
	// @include('resources/_modal.js');
	// -- //
})

// Accordion
const accordionTriggers = document.querySelectorAll(".accordion__trigger");

const accordionTriggerDisable = (trigger) => {
	trigger.disabled = true;
	setTimeout(() => {
		trigger.disabled = false;
	}, 500);
}

const accordionOpen = (trigger, body) => {
	body.style.height = body.scrollHeight + 'px';
	if (body.style.height === "0px" || window.getComputedStyle(body).height === "0px") {
		trigger.classList.add("accordion__trigger--active");
		trigger.setAttribute("aria-expanded", "true");
		body.setAttribute("aria-hidden", "false");
		body.classList.remove('accordion__body--hidden');
	}
}

const accordionClose = (trigger, body) => {
	if (body.style.height !== "0px" && window.getComputedStyle(body).height !== "0px") {
		trigger.classList.remove("accordion__trigger--active");
		trigger.setAttribute("aria-expanded", "false");
		body.setAttribute("aria-hidden", "true");
		body.style.height = body.scrollHeight + 'px';
		setTimeout(() => {
			body.style.height = "0";
		}, 0);
		setTimeout(() => {
			body.classList.add('accordion__body--hidden');
		}, 500);
	}
}

const setHeightOnTransitionEnd = (body) => {
	body.addEventListener("transitionend", () => {
		if (body.style.height !== "0px") {
			body.style.height = "auto";
		}
	})
}

const accordionToggle = (target) => {
	const trigger = target;
	const body = target.closest('.accordion__item').querySelector('.accordion__body');
	accordionTriggerDisable(trigger);
	setHeightOnTransitionEnd(body);
	accordionClose(trigger, body);
	accordionOpen(trigger, body);
}

accordionTriggers.forEach(trigger => {
	trigger.addEventListener('click', (e) => {
		let self = e.currentTarget;
		accordionToggle(self);
	})
})
// -- //