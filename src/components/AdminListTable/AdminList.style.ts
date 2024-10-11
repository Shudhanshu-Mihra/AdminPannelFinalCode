import styled from "styled-components";

export const TableStyles = {
    Container: styled.div`
      width: 100%;
      height: 100%;
    `,
    Head: styled.div`
      display: grid;
      grid-template-columns: 0.5fr 1.5fr 2fr 1fr 1fr 1fr;
      border-top: solid 1px ${({ theme }) => theme.colors.borderWhite};
      border-bottom: solid 1px ${({ theme }) => theme.colors.lightBlack};
      height: 6%;
      padding-left: 10px;
      padding-right: 10px;
    `,
    Row: styled.div`
      display: grid;
      grid-template-columns: 0.5fr 1.5fr 2fr 1fr 1fr 1fr;
      border-bottom: solid 1px ${({ theme }) => theme.colors.borderWhite};
    `,
    Text: styled.div<{ alignRight?: boolean }>`
      color: ${({ theme }) => theme.colors.lightBlack};
      font-size: 100%;
      text-align: ${({ alignRight }) => (alignRight ? 'right' : 'left')};
      white-space: nowrap;
      overflow: hidden;
      padding-top: 3%;
    `,
    EmptyContentWrapper: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 50px;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.lightBlack};
      border-bottom: solid 1px ${({ theme }) => theme.colors.borderWhite};
    `,
    ActionWrapper: styled.div`
      display: flex;
    `,
    ActionButton: styled.button`
      background: transparent;
      border: none;
      cursor: pointer;
      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `,
  };
  