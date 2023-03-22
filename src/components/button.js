export function Button({ onclick, className, title }) {
  return (
    <button
     className={className}
     type="button"
     onclick={onclick}
    >
        
     { title }
    </button>
  );
}
