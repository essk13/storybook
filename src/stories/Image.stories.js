export default {
    title: 'assets/Image',
    component: 'Image',
    argTypes: {
        "src": {
            description: "이미지 파일 절대경로"
        },
      },
  };

const Template = args => <img src={args.src} />;

export const Bamong = Template.bind({})
Bamong.args = {
    src: 'https://github.com/essk13/storybook/blob/master/public/img/bamong.png?raw=true',
}
Bamong.storyName = 'Bamong(PNG)'

export const Bombom = Template.bind({})
Bombom.args = {
    src: 'https://github.com/essk13/storybook/blob/master/public/img/bombom.png?raw=true',
}
Bombom.storyName = 'Bombom(PNG)'

export const Cu = Template.bind({})
Cu.args = {
    src: 'https://github.com/essk13/storybook/blob/master/public/img/cu.png?raw=true',
}
Cu.storyName = 'Cu(PNG)'