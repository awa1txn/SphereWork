let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
	mousePos = { x: event.clientX, y: event.clientY };
});

// Type Toggler
const toggleBtn = document.querySelector('.sidebar-fill__toggle');
const toggleTalent = document.querySelector('.sidebar-fill__talent');
const toggleCustomer = document.querySelector('.sidebar-fill__customer');

if (toggleBtn) {
	toggleBtn.addEventListener('click', () => {
		toggleBtn.classList.toggle('active');
		if (toggleBtn.classList.contains('active')) {
			toggleTalent.classList.remove('active');
			toggleCustomer.classList.add('active');
		} else {
			toggleTalent.classList.add('active');
			toggleCustomer.classList.remove('active');
		}
	});
}
// Type Toggler

// Show Details
const showBtn = document.querySelector('.sidebar-fill__btn');
const showBtnText = document.querySelector('.sidebar-fill__btn span');
const showContent = document.querySelector('.sidebar-fill__content');

if (showBtn) {
	showBtn.addEventListener('click', () => {
		showContent.classList.toggle('active');
		showBtn.classList.toggle('active');

		if (showBtn.classList.contains('active')) {
			showBtnText.innerHTML = `Hide Details`;
		} else {
			showBtnText.innerHTML = `Show Details`;
		}
	});
}
// Show Details

// EditProfileContent
const editBtn = document.querySelectorAll('.edit__btn');
const editContent = document.querySelectorAll('.edit__content_child')
const edit = document.querySelector('.edit')

if (editBtn[0]) {
	for (const btn of editBtn) {
		btn.addEventListener('click', () => {
			for (const btn2 of editBtn) {
				btn2.classList.remove('active');
			}
			btn.classList.add('active');

			for (const content of editContent) {
				if (content.getAttribute('data-index') == btn.getAttribute('data-index')) {
					content.classList.add('active');
				} else {
					content.classList.remove('active');
				}
			}
		});
	}
}
// EditProfileContent

// AvatarsHeight
const editAvatar = document.querySelectorAll('.edit-avatar__ava');
const editAvatarClose = document.querySelectorAll('.edit-avatar__close');
const avatar = document.querySelector('.edit-avatar');

if (avatar) {
	for (const ava of editAvatarClose) {
		ava.style.height = `${ava.clientWidth}px`;
	}

	for (const ava of editAvatar) {
		ava.style.height = `${ava.clientWidth}px`;
	}
}
// AvatarsHeight

// UnlockPopup

const popupsBg = document.querySelectorAll('.popup__bg')
for (const bg of popupsBg) {
	bg.addEventListener('click', () => {
		const pop = bg.parentElement;
		pop.classList.toggle('active');
	});
	bg.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		const pop = bg.parentElement;
		pop.classList.toggle('active');
		return false;
	});
}


const popupUnlock = document.querySelector('.popup-unlock');
const popupUnlockBtn = document.querySelector('.popup-unlock__btn');

const popupAvatar = document.querySelector('.popup-avatar');
const popupAvatarBtn = document.querySelector('.popup-avatar__btn');
if (popupAvatar) {
	popupAvatarBtn.addEventListener('click', () => {
		popupAvatar.classList.remove('active')
	});
}
// UnlockPopup

// Change Avatar
const yourPhoto = document.querySelector('.sidebar__img img');
const avaEdit = document.querySelectorAll('.edit-avatar__ava');

if (yourPhoto) {
	for (const ava of avaEdit) {
		if (!ava.classList.contains('locked')) {
			ava.addEventListener('click', () => {
				for (const ava2 of avaEdit) {
					ava2.classList.remove('active');
				}
				ava.classList.add('active');
				yourPhoto.setAttribute('src', ava.querySelector('img').getAttribute('src'));
			});
		} else {
			ava.addEventListener('click', () => {
				popupUnlock.classList.add('active');
				popupUnlockBtn.addEventListener('click', () => {
					popupUnlock.classList.remove('active');
					ava.classList.remove('locked');
					ava.classList.add('open');
					popupAvatar.classList.add('active')

					ava.addEventListener('click', () => {
						popupUnlock.classList.remove('active');
						for (const ava2 of avaEdit) {
							ava2.classList.remove('active');
						}
						ava.classList.add('active');
						yourPhoto.setAttribute('src', ava.querySelector('img:last-child').getAttribute('src'));
					});
				});
			})
		}
	}
}
// Change Avatar

// CollectionCheck
const collCheck = document.querySelectorAll('.edit-avatar-coll__check');
const collBtn = document.querySelector('.edit-avatar-coll__btn');
const collDrop = document.querySelector('.edit-avatar-coll__drop');


if (collDrop) {
	for (const btn of collCheck) {
		btn.addEventListener('click', () => {
			btn.classList.toggle('active')
		})
	}
}
if (collBtn) {
	collBtn.addEventListener('click', () => {
		collDrop.classList.toggle('active');
		collBtn.classList.toggle('active');
	})
}
// CollectionCheck

// SidebarFill
const sidebarAdd = document.querySelectorAll('.sidebar-fill__add');

if (avatar) {
	for (const btn of sidebarAdd) {
		if (btn.getAttribute('portfolio') != 'portfolio') {
			btn.addEventListener('click', () => {
				for (const content of editContent) {
					if (content.getAttribute('data-index') == 2) {
						content.classList.add('active')
					} else {
						content.classList.remove('active')
					}
				}

				for (const btn of editBtn) {
					if (btn.getAttribute('data-index') == 2) {
						btn.classList.add('active');
					} else {
						btn.classList.remove('active');
					}
				}
			});
		} else {
			btn.addEventListener('click', () => {
				for (const content of editContent) {
					if (content.getAttribute('data-index') == 3) {
						content.classList.add('active')
					} else {
						content.classList.remove('active')
					}
				}

				for (const btn of editBtn) {
					if (btn.getAttribute('data-index') == 3) {
						btn.classList.add('active');
					} else {
						btn.classList.remove('active');
					}
				}
			});
		}
	}
}
// SidebarFill

// MenuMobile
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const menuBg = document.querySelector('.menu__bg');
const body = document.body;

if (burger) {
	burger.addEventListener('click', () => {
		menu.classList.toggle('active')
		body.classList.toggle('scroll-lock')
		menuBg.classList.toggle('active')
	});

	menuBg.addEventListener('click', () => {
		menu.classList.toggle('active')
		body.classList.toggle('scroll-lock')
		menuBg.classList.toggle('active')
	});
}
// MenuMobile

// SignCheck
const signCheck = document.querySelector('.sign__check');
if (signCheck) {
	signCheck.addEventListener('click', () => {
		signCheck.classList.toggle('active');
	})
}
// SignCheck

// CurrentCheck
const currentCheck = document.querySelector('.edit-general-work__current');
if (currentCheck) {
	currentCheck.addEventListener('click', () => {
		currentCheck.classList.toggle('active');
	})
}
// CurrentCheck

// dropCheck
const dropCheck = document.querySelectorAll('.edit-general-main__check');
if (dropCheck[0]) {
	for (const btn of dropCheck) {
		btn.addEventListener('click', () => {
			btn.classList.toggle('active');
		})
	}
}
// dropCheck

// SignPopups
const popupPhone = document.querySelector('.popup-phone');
const popupVer = document.querySelector('.popup-ver');
const popupNumber = document.querySelector('.popup-number');
const signBtn = document.querySelector('.sign__btn');
const signPhoneBtn = document.querySelector('.popup-phone__btn');
const signVerBtn = document.querySelector('.popup-ver__btn');
const signNumberBtn = document.querySelector('.popup-number__btn');

if (signBtn) {
	signBtn.addEventListener('click', () => {
			popupPhone.classList.toggle('active');
	});
	signPhoneBtn.addEventListener('click', () => {
		popupPhone.classList.toggle('active');
		popupVer.classList.toggle('active');
	});
	signVerBtn.addEventListener('click', () => {
		popupVer.classList.toggle('active');
		popupNumber.classList.toggle('active');
	});
	signNumberBtn.addEventListener('click', () => {
		popupNumber.classList.toggle('active');
		window.location.href = "https://nazarbog123.github.io/spherework/profile.html";
	});
}

const popupForgot = document.querySelector('.popup-forgot');
const popupPass = document.querySelector('.popup-pass');
const popupPassBtn = document.querySelector('.popup-pass__btn');
const popupForgotBtn = document.querySelector('.popup-forgot__btn');
const forgotBtn = document.querySelector('.sign__forgot');

if (forgotBtn) {
	forgotBtn.addEventListener('click', () => {
		popupForgot.classList.toggle('active');
	});
	popupForgotBtn.addEventListener('click', () => {
		popupForgot.classList.toggle('active');
		popupPass.classList.toggle('active');
	});
	popupPassBtn.addEventListener('click', () => {
		popupPass.classList.toggle('active');
	});
}
// SignPopups

// ApplyPopup
const popupApply = document.querySelector('.popup-apply');
const popupApplyBtn = document.querySelector('.popup-apply__open');
const popupApplyCancel = document.querySelector('.popup-apply__cancel');

if (popupApplyBtn) {
	popupApplyBtn.addEventListener('click', () => {
		popupApply.classList.toggle('active')
	});
	popupApplyCancel.addEventListener('click', () => {
		popupApply.classList.toggle('active')
	});
}
// ApplyPopup



// MobileProfileContent
const peofileBtn = document.querySelectorAll('.profile-mobile__btn');
const peofileContent = document.querySelectorAll('.profile-mobile__content_child')
const profile = document.querySelector('.profile')

if (profile) {
	for (const btn of peofileBtn) {
		btn.addEventListener('click', () => {
			for (const btn2 of peofileBtn) {
				btn2.classList.remove('active');
			}
			btn.classList.add('active');

			for (const content of peofileContent) {
				if (content.getAttribute('data-index') == btn.getAttribute('data-index')) {
					content.classList.add('active');
				} else {
					content.classList.remove('active');
				}
			}
		});
	}
}
// MobileProfileContent



// EditGeneralSocial
const genEditBtnSocial = document.querySelector('.edit-general__editbtn_3');
const genEditBtnSocialCancel = document.querySelector('.edit-general-social__cancel');
const genRealSocialContent = document.querySelector('.edit-general-social');
const genEditSocialContent = document.querySelector('.edit-general-social_2');

if (genEditBtnSocial) {
	genEditBtnSocial.addEventListener('click', () => {
		genRealSocialContent.classList.toggle('removed');
		genEditSocialContent.classList.toggle('active');
	});
	genEditBtnSocialCancel.addEventListener('click', () => {
		genRealSocialContent.classList.toggle('removed');
		genEditSocialContent.classList.toggle('active');
	});
}
// EditGeneralSocial

// EditGeneralWork
const genEditBtnWork = document.querySelector('.edit-general__editbtn_2');
const genEditBtnWorkCancel = document.querySelector('.edit-general-work__cancel');
const genRealWorkContent = document.querySelector('.edit-general-work');
const genEditWorkContent = document.querySelector('.edit-general-work_2');

if (genEditBtnWork) {
	genEditBtnWork.addEventListener('click', () => {
		genRealWorkContent.classList.toggle('removed');
		genEditWorkContent.classList.toggle('active');
	});
	genEditBtnWorkCancel.addEventListener('click', () => {
		genRealWorkContent.classList.toggle('removed');
		genEditWorkContent.classList.toggle('active');
	});
}
// EditGeneralWork

// EditGeneralMain
const genEditBtnMain = document.querySelector('.edit-general__editbtn_1');
const genEditBtnMainCancel = document.querySelector('.edit-general-main__cancel');
const genRealMainContent = document.querySelector('.edit-general-main');
const genEditMainContent = document.querySelector('.edit-general-main_2');

if (genEditBtnMain) {
	genEditBtnMain.addEventListener('click', () => {
		genRealMainContent.classList.toggle('removed');
		genEditMainContent.classList.toggle('active');
	});
	genEditBtnMainCancel.addEventListener('click', () => {
		genRealMainContent.classList.toggle('removed');
		genEditMainContent.classList.toggle('active');
	});
}
// EditGeneralMain

// GeneralMainSkills
const skillsDrop = document.querySelector('.edit-general-main__drop');
const skillsOpen = document.querySelector('.edit-general-main__open');
const skillsCancel = document.querySelector('.edit-general-main__drop_cancel');

if (skillsDrop) {
	skillsOpen.addEventListener('click', () => {
		skillsDrop.classList.toggle('active');
	});
	skillsCancel.addEventListener('click', () => {
		skillsDrop.classList.toggle('active');
	});
}

const skillSwap = document.querySelectorAll('.edit-general-main__swap');
const skillContent = document.querySelectorAll('.edit-general-main__content');

if (skillSwap[0]) {
	for (const btn of skillSwap) {
		btn.addEventListener('click', () => {
			for (const btn2 of skillSwap) {
				btn2.classList.remove('active');
			}
			btn.classList.add('active');

			for (const content of skillContent) {
				if (content.getAttribute('data-index') == btn.getAttribute('data-index')) {
					content.classList.add('active');
				} else {
					content.classList.remove('active');
				}
			}
		});
	}
}
// GeneralMainSkills

// WalletGraphBtn
const walletGraphBtn = document.querySelectorAll('.wallet-graph__btn')
const wallet = document.querySelector('.wallet')

if (wallet) {
	for (const btn of walletGraphBtn) {
		btn.addEventListener('click', () => {
			for (const btn2 of walletGraphBtn) {
				btn2.classList.remove('active')
			}
			btn.classList.add('active');
		});
	}
}
// WalletGraphBtn

// WalletDrop
const walletDrop = document.querySelector('.wallet-info__drop_wrap');
const walletDropOpen = document.querySelector('.wallet-info__open');
const walletDropClose = document.querySelector('.wallet-info__close');

if (wallet) {
	walletDropOpen.addEventListener('click', () => {
		walletDrop.classList.toggle('active');
	});
	walletDropClose.addEventListener('click', () => {
		walletDrop.classList.toggle('active');
	});
}
// WalletDrop

// MarketOrderDrop
const marketOrderBtn = document.querySelectorAll('.market-order__btn')

if (marketOrderBtn[0]) {
	for (const btn of marketOrderBtn) {
		btn.addEventListener('click', () => {
			const drop = btn.parentNode.querySelector('.market-order__drop');

			btn.classList.toggle('active');
			drop.classList.toggle('active');
		});
	}
}

const marketOrderCatBtn = document.querySelectorAll('.market-order__cat button')
const marketOrderCat = document.querySelectorAll('.market-order__cat')
const marketOrderClear = document.querySelector('.market-order__clear')

if (marketOrderCatBtn[0]) {
	marketOrderClear.addEventListener('click', () => {
		for (const cat of marketOrderCat) {
			cat.classList.remove('active')
		}
	})

	for (const btn of marketOrderCatBtn) {
		btn.addEventListener('click', () => {
			const box = btn.parentNode;
			box.classList.remove('active');
		})
	}
}
// MarketOrderDrop

// LikeBtn
const likeBtn = document.querySelectorAll('.like-btn')

if (likeBtn[0]) {
	for (const btn of likeBtn) {
		btn.addEventListener('click', () => {
			btn.classList.toggle('active')
		});
	}
}
// LikeBtn

// MarketFilters
const marketFilterBtn = document.querySelector('.market-order__filter_2 button');
const marketFilterBg = document.querySelector('.market-order__form_bg');
const marketFilterForm = document.querySelector('.market-order__form');


if (marketFilterBtn) {
	marketFilterBtn.addEventListener('click', () => {
		marketFilterForm.classList.toggle('active')
	});
	marketFilterBg.addEventListener('click', () => {
		marketFilterForm.classList.toggle('active')
	});
}
// MarketFilters

// SettingsPopup
const settingPopup = document.querySelector('.popup-settings');
const settingPopupBtn = document.querySelector('.popup-settings__open');
const settingPopupBtnClose = document.querySelector('.popup-settings__close');
const leavePopup = document.querySelector('.popup-leave');
const leavePopupBtn = document.querySelector('.popup-leave__open');

if (settingPopup) {
	settingPopupBtn.addEventListener('click', () => {
		settingPopup.classList.toggle('active')
	})
	settingPopupBtnClose.addEventListener('click', () => {
		settingPopup.classList.toggle('active')
	})
	leavePopupBtn.addEventListener('click', () => {
		settingPopup.classList.toggle('active');
		leavePopup.classList.toggle('active')
	})
}
// SettingsPopup

// DepositPopup
const depositPopup = document.querySelector('.popup-deposit');
const depositPopupBtn = document.querySelector('.popup-deposit__open');
const depositPopupBtnClose = document.querySelector('.popup-deposit__close');
if (depositPopup) {
	depositPopupBtn.addEventListener('click', () => {
		depositPopup.classList.toggle('active')
	})
	depositPopupBtnClose.addEventListener('click', () => {
		depositPopup.classList.toggle('active')
	})
}
// DepositPopup

// Messages
const messagesBtn = document.querySelectorAll('.messages-user__item')

if (messagesBtn[0]) {
	for (const btn of messagesBtn) {
		btn.addEventListener('click', () => {
			for (const btn2 of messagesBtn) {
				btn2.classList.remove('active');
			}
			btn.classList.add('active');
		})
	}
}

const messagesContent = document.querySelectorAll('.messages-chat-content');

if (messagesContent[0]) {
	for (const content of messagesContent) {
		content.scrollTop = content.scrollHeight;
	}
}

const profileBtn = document.querySelector('.messages-chat__profile_p');
const profileBtnClose = document.querySelector('.messages-info__close');
const messagesChat = document.querySelector('.messages-chat');
const messagesInfo = document.querySelector('.messages-info');

if (profileBtn) {
	profileBtn.addEventListener('click', () => {
		messagesChat.classList.toggle('removed')
		messagesInfo.classList.toggle('removed')
	});
	profileBtnClose.addEventListener('click', () => {
		messagesChat.classList.toggle('removed')
		messagesInfo.classList.toggle('removed')
	});
}

const messagesChatInfo = document.querySelector('.messages-chat-pinned');
const messagesChatReply = document.querySelector('.messages-chat-reply');
const messagesChatInfoClose = document.querySelector('.messages-chat-pinned__close');
const messagesChatReplyClose = document.querySelector('.messages-chat-reply__close');

if (messagesChatInfoClose) {
	messagesChatInfoClose.addEventListener('click', () => {
		messagesChatInfo.classList.toggle('removed')
	});
	messagesChatReplyClose.addEventListener('click', () => {
		messagesChatReply.classList.toggle('removed')
	});
}

const messagesChatSearch = document.querySelector('.messages-chat__search');
const messagesChatSearchBody = document.querySelector('.messages-chat__body');

if (messagesChatSearch) {
	messagesChatSearch.addEventListener('click', () => {
		messagesChatSearchBody.classList.toggle('active')
	});
}

const messagesItem = document.querySelectorAll('.messages-chat-content__item');
const popupRight1 = document.querySelector('.popup-right_1')
const popupRightBody1 = document.querySelector('.popup-right_1 .popup__body')

if (messagesItem) {
	for (const btn of messagesItem) {
		btn.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			if (mousePos.y > 800) {
				popupRightBody1.style.top = `${mousePos.y - 200}px`;
			} else {
				popupRightBody1.style.top = `${mousePos.y}px`;
			}
			popupRightBody1.style.left = `${mousePos.x - 190}px`;
			popupRight1.classList.toggle('active');
			return false;
		})
	}
}

const messagesUsers = document.querySelectorAll('.messages-user__item');
const messagesUsersBtn = document.querySelector('.messages-chat__dots');
const popupRight2 = document.querySelector('.popup-right_2')
const popupRightBody2 = document.querySelector('.popup-right_2 .popup__body');

if (messagesUsers[0]) {
	for (const btn of messagesUsers) {
		btn.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			if (mousePos.y > 800) {
				popupRightBody2.style.top = `${mousePos.y - 300}px`;
			} else {
				popupRightBody2.style.top = `${mousePos.y}px`;
			}
			popupRightBody2.style.left = `${mousePos.x}px`;
			popupRight2.classList.toggle('active');
			return false;
		})
	}

	messagesUsersBtn.addEventListener('click', (e) => {
		e.preventDefault();
		popupRightBody2.style.top = `${mousePos.y + 20}px`;
		popupRightBody2.style.left = `${mousePos.x - 220}px`;
		popupRight2.classList.toggle('active');
		return false;
	})
}


let widthWindow = document.body.clientWidth;
const messagesBack = document.querySelector('.messages__back')

if (widthWindow <= 700 && messagesBack) {
	messagesBack.addEventListener('click', () => {
		if (messagesInfo.classList.contains('removed')) {
			messagesChat.classList.remove('active');
			messagesBack.classList.remove('active');
		} else if (!messagesInfo.classList.contains('removed')) {
			messagesChat.classList.remove('active');
			messagesInfo.classList.add('removed');
			messagesBack.classList.remove('active');
		}
	});

	for (const btn of messagesUsers) {
		btn.addEventListener('click', () => {
			messagesChat.classList.toggle('active');
			messagesBack.classList.toggle('active');

		});
	}

	for (const btn of messagesItem) {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			if (mousePos.y > document.body.clientHeight - 200) {
				popupRightBody1.style.top = `${mousePos.y - 200}px`;
			} else {
				popupRightBody1.style.top = `${mousePos.y}px`;
			}
			if (mousePos.x < 200) {
				popupRightBody1.style.left = `${mousePos.x}px`;
			} else {
				popupRightBody1.style.left = `${mousePos.x - 190}px`;
			}

			popupRight1.classList.toggle('active');
			return false;
		})
	}
}
// Messages

// ProfileSettings

const profileNickname  = document.querySelector('#profilenickname')
const profileLogin = document.querySelector('#profilelogin')
const profileEmail = document.querySelector('#profileemail')

const publishSettings = (profileNickname, profileLogin, profileEmail) =>{
	const Nicknameregex = /^[A-Za-z]{3,}$/;
    const NicknameisValid = Nicknameregex.test(profileNickname.value);

    if (!NicknameisValid) {
		profileNickname.classList.add("sign__check-error")
    }
	const Loginregex = /^[A-Za-z]{3,}$/;
    const LoginisValid = Loginregex.test(profileLogin.value);

    if (!LoginisValid) {
		profileLogin.classList.add("sign__check-error")
    }

	const Emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const EmailisValid = Emailregex.test(profileEmail.value);

    if (!EmailisValid) {
		profileEmail.classList.add("sign__check-error")
    }
}
const publishingSettings = () =>{
	publishSettings(profileNickname, profileLogin, profileEmail)
}
// ProfileSettings

// PublishOrder

const orderTitle = document.querySelector('#orderTitle')
const orderDesc = document.querySelector('#orderDesc')
/* const orderCategory */
const orderBudget = document.querySelector('#orderBudget')
const orderStartDate = document.querySelector('.orderStartDate')
const orderFiles = document.querySelector('#orderFiles')

const createOrder = (orderTitle, orderDesc, orderBudget, orderStartDate, orderFiles) =>{
	if(orderTitle.value.length < 5){
		orderTitle.classList.add("sign__check-error")
	}

	if(orderDesc.value.length < 80) {
		orderDesc.classList.add("sign__check-error")
	}

	if(orderBudget.value.length > 0){
		console.log('budget valid')
	} else{
		orderBudget.classList.add("sign__check-error")
	}

	if(orderStartDate.value.length > 0) {
		console.log('Length valid')
	}  else{
		orderStartDate.classList.add("sign__check-error")
	}

	if(orderFiles.files[0] && orderFiles.files[0].type.startsWith("image/")){
		console.log('file(IMAGE) valid')
	} else{
		orderFiles.classList.add("sign__check-error")
	}

}
const creatingOrder = () =>{
	createOrder(orderTitle, orderDesc, orderBudget, orderStartDate, orderFiles)
}


// PublishOrder


// SpecifyPortfolio

const ProjName = document.querySelector('#projectName')
const ProjDesc = document.querySelector('#projDesc')
const ProjFiles = document.querySelector('#projFiles')

const savePortfolio = (ProjName, ProjDesc, ProjFiles) =>{
	if(ProjName.value.length < 5){
		ProjName.classList.add("sign__check-error")
	}

	if(ProjDesc.value.length < 80) {
		ProjDesc.classList.add("sign__check-error")
	}

	if(ProjFiles.files[0] && ProjFiles.files[0].type.startsWith("image/")){
		console.log('file(IMAGE) for portfolio validation succes')
	} else{
		ProjFiles.classList.add("sign__check-error")
	}
}
const savingPortfolio = () =>{
	savePortfolio(ProjName, ProjDesc, ProjFiles)
}

// SpecifyPortfolio

// ApplyForJob
const coverLetterValidator = document.getElementById('cover-letter')
const budgetValidator = document.getElementById('budget')
const deadlineValidator = document.getElementById('deadline')

const ApplyForJob = (coverLetterValidator, budgetValidator, deadlineValidator) => {
	if(coverLetterValidator.value.length >= 200){
		console.log('succes cover letter more than 200 symbols')
	} else{
		coverLetterValidator.classList.add("sign__check-error")
	}

	if(budgetValidator.value.length > 0){
		console.log('budget is not empty')
	} else{
		budgetValidator.classList.add("sign__check-error")
	}
	
	if(deadlineValidator.value.length > 0) {
		console.log('Length validator')
	}  else{
		deadlineValidator.classList.add("sign__check-error")
	}
}
const ApplyingForJob = () =>{
	ApplyForJob(coverLetterValidator, budgetValidator, deadlineValidator)
}

// ApplyForJob

// AuthValidation

const nameValidator = document.getElementById('Name');
const emailValidator = document.getElementById('Email');
const PasswordValidator = document.getElementById('Password');
const ConfirmPasswordValidator = document.getElementById('ConfirmPassword');
const CheckValidator = document.getElementById('check');

let passToggler = true;

const SignUpValidate = (nameValidator, emailValidator, PasswordValidator, ConfirmPasswordValidator, CheckValidator) => {
	const Nameregex = /^[A-Za-z]{3,}$/;
    const NameisValid = Nameregex.test(nameValidator.value);

    if (!NameisValid) {
	  nameValidator.style.cssText = "color: red";
	  nameValidator.value = '';
	  nameValidator.placeholder = 'Name required 3 letters long and only letters.'
	  nameValidator.classList.add("sign__input-error")
    }

	const Emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const EmailisValid = Emailregex.test(emailValidator.value);

    if (!EmailisValid) {
	  emailValidator.value = '';
	  emailValidator.placeholder = 'Email invalid.'
	  emailValidator.classList.add("sign__input-error")
    }

	const Passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const PasswordisValid = Passwordregex.test(PasswordValidator.value);

    if (!PasswordisValid) {
		PasswordValidator.value = '';
		PasswordValidator.placeholder = 'Required 8 letters, 1 uppercase and 1 digit.'
		PasswordValidator.classList.add("sign__input-error")
    }

	if (PasswordValidator.value !== ConfirmPasswordValidator.value) {
		ConfirmPasswordValidator.value = '';
		ConfirmPasswordValidator.placeholder = 'Passwords do not match.'
		ConfirmPasswordValidator.classList.add("sign__input-error")
	}
	if(!document.querySelector(".sign__check").classList.contains("active") ){
		document.querySelector(".sign__check").classList.add("sign__check-error")
	}

}

const SignUpValidating = () =>{
	SignUpValidate(nameValidator, emailValidator, PasswordValidator, ConfirmPasswordValidator, CheckValidator)
}

const SignInValidate = (emailValidator, PasswordValidator) => {

	const Emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const EmailisValid = Emailregex.test(emailValidator.value);

    if (!EmailisValid) {
	  emailValidator.value = '';
	  emailValidator.placeholder = 'Email invalid.'
	  emailValidator.classList.add("sign__input-error")
    }

	const Passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const PasswordisValid = Passwordregex.test(PasswordValidator.value);

    if (!PasswordisValid) {
		PasswordValidator.value = '';
		PasswordValidator.placeholder = 'Required 8 letters, 1 uppercase and 1 digit.'
		PasswordValidator.classList.add("sign__input-error")
    }

	if(!document.querySelector(".sign__check").classList.contains("active") ){
		document.querySelector(".sign__check").classList.add("sign__check-error")
	}

}

const SignInValidating = () =>{
	SignInValidate(emailValidator, PasswordValidator)
}


const showPassToggle = () => { //showPassToggle
	passToggler = !passToggler;
	if(passToggler == false){
		document.querySelector('.pass_input1').type = 'text'
		document.querySelector('.pass_input2').type = 'text'
	} else {
		document.querySelector('.pass_input1').type = 'password'
		document.querySelector('.pass_input2').type = 'password'
	}
}
// AuthValidation

// GeneralProfileEdit

const GeneralProfileCountry = document.querySelector('#GeneralCountry')
const GeneralProfileLanguages = document.querySelector('#GeneralLanguages')
const GeneralProfileAboutMe = document.querySelector('#GeneralAboutMe')

const publishGeneralProfile = (GeneralProfileCountry, GeneralProfileLanguages, GeneralProfileAboutMe)=>{
	if(GeneralProfileCountry.value.length < 5){
		GeneralProfileCountry.classList.add("sign__check-error")
	}
	if(GeneralProfileLanguages.value.length < 5){
		GeneralProfileLanguages.classList.add("sign__check-error")
	}
	if(GeneralProfileAboutMe.value.length < 60){
		GeneralProfileAboutMe.classList.add("sign__check-error")
	}
}

const publishingGeneralProfile = ()=>{
	publishGeneralProfile(GeneralProfileCountry, GeneralProfileLanguages, GeneralProfileAboutMe)
}
// GeneralProfileEdit

// GeneralWorkExp
const GeneralWorkExpCompanyName = document.querySelector('#GeneralWorkExpCompanyName')
const GeneralWorkExpJobTitle = document.querySelector('#GeneralWorkTitle')
const GeneralWorkExpStartDate = document.querySelector('.date__input1')
const GeneralWorkExpEndDate = document.querySelector('.date__input2')
const GeneralWorkExpDesc = document.querySelector('#GeneralWorkDesc')

const publishGeneralWorkExp = (GeneralWorkExpCompanyName, GeneralWorkExpJobTitle, GeneralWorkExpStartDate, GeneralWorkExpEndDate, GeneralWorkExpDesc) =>{
	if(GeneralWorkExpCompanyName.value.length < 3){
		GeneralWorkExpCompanyName.classList.add("sign__check-error")
	}
	if(GeneralWorkExpJobTitle.value.length < 3){
		GeneralWorkExpJobTitle.classList.add("sign__check-error")
	}
	if(GeneralWorkExpStartDate.value.length < 3){
		GeneralWorkExpStartDate.classList.add("sign__check-error")
	}
	if(GeneralWorkExpEndDate.value.length < 3){
		GeneralWorkExpEndDate.classList.add("sign__check-error")
	}
	if(GeneralWorkExpDesc.value.length < 60){
		GeneralWorkExpDesc.classList.add("sign__check-error")
	}
}
const publishinGeneralWorkExp = ()=>{
	publishGeneralWorkExp(GeneralWorkExpCompanyName, GeneralWorkExpJobTitle, GeneralWorkExpStartDate, GeneralWorkExpEndDate, GeneralWorkExpDesc)
}
// GeneralWorkExp

// GeneralSocialMedia

const GeneralBehance = document.querySelector('#GeneralBehance')
const GeneralDribble = document.querySelector('#GeneralDribble')
const GeneralInstagram = document.querySelector('#GeneralInstagram')
const GeneralLinkedin = document.querySelector('#GeneralLinkedin')


// GeneralSocialMedia


// INCLUDE JQUERY & JQUERY UI 1.12.1

$(function () {
	$("#datepicker").datepicker({
		dateFormat: "dd-mm-yy"
		, duration: "fast"
	});
});

$(function () {
	$("#datepicker2").datepicker({
		dateFormat: "dd-mm-yy"
		, duration: "fast"
	});
});

$(function () {
	$("#datepicker3").datepicker({
		dateFormat: "dd-mm-yy"
		, duration: "fast"
	});
});
