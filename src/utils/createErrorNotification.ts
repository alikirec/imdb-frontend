export default function(title: string, copy: string): object {
  return {
    title,
    message: copy,
    type: 'danger',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut']
  };
}
