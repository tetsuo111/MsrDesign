jQuery(function($) {
	/** ���[�_�� ========================================================*/
	// ���[�_���\��
	$('.modal-button, .modal-img').on('click', function() {
		var target = $(this).data('target');
		$(target).addClass('is-active');
		// �Z���t�ݒ�
		if ($(target).find('.caption').length > 0) {
			var randomCaptionValue = '7';
			var targetCaptionList = $('.caption-list, .mydata-caption-list');
			if (targetCaptionList.find('.radio:checked').length > 0) {
				var captionText = '';
				// �������͔���
				if ($('#JsCaptionListLast').is(':checked')) {
					if ($('#js-caption-input').val() == '') {
						// �����͂̏ꍇ�A��\��
						$(target).find('.caption').hide();
						return;
					}
					captionText = $('#js-caption-input').val();
				} else {
					var checkedValue = targetCaptionList.find('.radio:checked').val();
					if (checkedValue == randomCaptionValue) {
						// �����_���̏ꍇ
						captionText = targetCaptionList.find('.radio').eq(getRandomInt(0, 6)).next('label').text();
					} else {
						captionText = targetCaptionList.find('.radio:checked + label').text();
					}
				}
				$(target).find('.caption-text').text(captionText);
				$(target).find('.caption').show();
			} else {
				$(target).find('.caption').hide();
			}
		}
	});
	// ���[�_������
	$('.modal .delete').on('click', function() {
		$(this).closest('.modal').removeClass('is-active');
	});
	$('.modal-background, .modal-close, .modal-content').on('click', function() {
		$(this).closest('.modal').removeClass('is-active');
	});
	/** �A�R�[�f�B�I���J�� ==============================================*/
	$('.accordion-toggle').on('click', function(){
		$(this).toggleClass('accordion-toggle-open')
				.next('.accordion-list,.accordion-column').slideToggle();
	});
	/** �߂�{�^�������� ================================================*/
	var isHistoryPush = false;
	if (history && history.pushState && history.state !== undefined) {
		history.pushState(null, null, null);
		isHistoryPush = true;
		$(window).on('popstate', function(e) {
			if (isHistoryPush) {
				history.pushState(null, null, null);
			}
		});
	}
	/** �h���b�v�_�E���J�� ================================================*/
	$('.dropdown').on('click', function() {
		$(this).toggleClass('is-active');
	});
	// �h���b�v�_�E���̍��ڑI����
	$('.dropdown-item').on('click', function() {
		// �h���b�v�_�E�������
		$(this).closest('.dropdown').toggleClass('is-active');
	});
	/** �T�u�~�b�g�{�^����x�����h�~ ======================================*/
	$('form').submit(function(){
		// ������
		$(this).find(':submit').prop('disabled', true);
		return true;
	});
	/** ���̑� ================================================*/
	/*
	 * �����_���l���擾
	 */
	function getRandomInt(min, max) {
		return Math.floor( Math.random() * (max - min + 1) ) + min;
	}
});

