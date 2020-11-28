import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'v-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  /* To add necessary parts of the cards
   *
   * set the values to true to get those sections
   *
   * To get the contents displayed use the respection content selectors
   * v-card-header  - 'header'  (set 'header' to true, to make it visible)
   * v-card-content - 'content' (set 'content' to true, to make it visible)
   * v-card-actions - 'actions' (For buttons at the bottom / set 'actions' to true, to make it visible)
   * v-card-footer  - 'footer'  (set 'footer' to true, to make it visible)
   *
   * To get the action button Aligment set,
   * 'actionAlign' - start | end , default is start
   *
   * 'avatarImgUrl' and 'cardImage' takes in url as string
   *
   * 'title' and 'subtitle' is added if they are provided with 'header' is set to true
   *
   *  'width' (pass a number) ,specifies the card width in 'rem',default is '30rem'
   *  'cardImgHeight' and 'cardImgWidth' (pass a number) ,specifies the card width in 'rem', default is 'inherit'
   *
   * ***** Note *****
   * use either custom header / header with [title,subtitle,image avatar]
   * User have full control over the design part of the any of the custom elements passed down through:
   * v-card-header, v-card-content, v-card-content, v-card-actions, v-card-footer
   * *****************
   *
   */
  @Input() actions = false;
  @Input() header = false;
  @Input() content = false;
  @Input() footer = false;

  @Input() actionAlign = 'start';
  @Input() avatarImgUrl = '';
  @Input() cardImage = '';

  @Input() title = '';
  @Input() subtitle = '';

  @Input() width = 30;
  @Input() cardImgHeight = 'inherit';
  @Input() cardImgWidth = 'inherit';

  constructor() {}

  ngOnInit(): void {}

  convertImageObj(val: string) {
    return {
      'background-image': `url(${val})`,
    };
  }

  getWidthInRem(width: number) {
    return {
      width: width + 'rem',
    };
  }
  getImageSize(height: number | string, width: number) {
    return {
      width: width + 'rem',
      height: height + 'rem',
    };
  }
}
