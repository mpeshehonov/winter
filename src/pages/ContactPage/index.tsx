import styled from '@emotion/styled';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../shared/ui/Logo';

const Page = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 24px; /* поля страницы */
  display: grid;
  place-items: center; /* центрирование карточки */
  @media (max-width: 560px) {
    padding: 16px 12px 72px; /* нижний отступ под фикс-кнопку */
  }
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #000;
`;

const PhoneText = styled.div`
  color: rgba(0,0,0,0.7);
  font-size: 16px;
  @media (max-width: 480px) { font-size: 14px; }
`;

const FormCard = styled.div`
  width: min(100%, 820px);
  display: grid;
  grid-template-rows: auto auto auto;
  row-gap: 48px;
  background: #fff; /* белый фон карточки */
  color: #000;
  border-radius: 0;
  padding: 24px;
  @media (max-width: 560px) {
    padding: 16px;
    row-gap: 28px;
  }
`;

const InlineForm = styled.form`
  display: grid;
  grid-template-columns: minmax(240px, 560px) 160px;
  align-items: end;
  gap: 48px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 24px;
    width: 100%;
  }
`;

const InputWrap = styled.label`
  display: grid;
  gap: 8px;
`;

const Input = styled.input<{ $invalid: boolean }>`
  width: 100%;
  background: transparent;
  color: #000;
  border: none;
  border-bottom: 2px solid
    ${({ $invalid }) => ($invalid ? 'rgba(255,70,70,0.95)' : 'rgba(0,0,0,0.6)')};
  padding: 10px 0 10px;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  outline: none;
  caret-color: #000;

  &:focus {
    border-bottom-color: ${({ $invalid }) => ($invalid ? 'rgba(255,70,70,0.95)' : '#000000')};
  }

  &::placeholder {
    color: rgba(0,0,0,0.45);
  }

  @media (max-width: 560px) { font-size: 22px; }
`;

const Submit = styled.button`
  justify-self: start;
  background: transparent;
  color: rgba(0,0,0,0.85);
  border: none;
  border-bottom: 2px solid rgba(0,0,0,0.6);
  padding: 10px 0 8px;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border-radius: 0; /* убрать скругления */
  cursor: pointer;
  transition: color .2s ease, border-color .2s ease, opacity .2s ease;
  @media (hover: hover) and (pointer: fine) {
    &:hover { color: #000; border-bottom-color: #000; }
  }
  &:active { opacity: .9; }
  &:disabled { opacity: .45; cursor: not-allowed; }
  @media (max-width: 560px) { font-size: 22px; }
`;

const Helper = styled.div`
  grid-column: 1 / -1;
  margin-top: 8px;
  font-size: 13px;
  color: rgba(255,70,70,0.95);
`;

const BottomBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: end;
  color: rgba(0,0,0,0.7);
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 8px;
    text-align: center;
  }
`;

const BottomButton = styled.button`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 12px;
  width: 100%;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 0;
  padding: 18px 16px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  @supports (backdrop-filter: blur(6px)) {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(6px);
  }
`;

const BottomLeft = styled.div`
  justify-self: start;
`;
const BottomCenter = styled.div`
  justify-self: center;
`;
const BottomRight = styled.div`
  justify-self: end;
`;

function ContactPage() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const isEmail = useMemo(() => /.+@.+\..+/.test(value), [value]);
  const isPhone = useMemo(() => /^\+?[\d\s()-]{6,}$/.test(value), [value]);
  const isValid = (isEmail || isPhone) && value.trim().length > 0;
  const invalid = touched && !isValid;

  const [now, setNow] = useState<string>('');
  useEffect(() => {
    const update = () => setNow(new Date().toLocaleTimeString('ru-RU'));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    // Здесь может быть отправка
    navigate(-1);
  };

  return (
    <Page>
      <FormCard>
        <TopBar>
          <Logo size={24} color="#000" />
          <PhoneText>8 (953) 434-03-66</PhoneText>
        </TopBar>

        <InlineForm onSubmit={onSubmit} noValidate>
          <InputWrap>
            <Input
              $invalid={invalid}
              placeholder="Введите номер телефона или почту"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={() => setTouched(true)}
              aria-invalid={invalid}
              aria-describedby={invalid ? 'contact-error' : undefined}
            />
          </InputWrap>
          <Submit type="submit" disabled={!isValid}>Отправить</Submit>
          {invalid && (
            <Helper id="contact-error">Введите корректный номер телефона или email</Helper>
          )}
        </InlineForm>

        <BottomBar>
          <BottomLeft>kry.zima.ru</BottomLeft>
          <BottomCenter>kry.zima@mail.ru</BottomCenter>
          <BottomRight>({now})</BottomRight>
        </BottomBar>
      </FormCard>
      <BottomButton type="button" onClick={() => navigate(-1)}>Назад</BottomButton>
    </Page>
  );
}

export default ContactPage;


