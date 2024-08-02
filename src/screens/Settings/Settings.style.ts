import { styled } from 'styles/theme';

export const SettingsStyles = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    background: ${({ theme }) => theme.colors.lighterGrey};
    padding-top: 15px;
  `,
  OutletWrapper: styled.div`
  position: relative;
    overflow: hidden;
    overflow-y: scroll;
    height: calc(100vh - 75px);
    padding-bottom: 100px;
  `,
};