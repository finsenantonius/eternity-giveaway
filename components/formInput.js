import styles from './formInput.module.css'

export default function FormInput({ label, type, placeholder, value, onChange }) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <input className={styles.input} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}