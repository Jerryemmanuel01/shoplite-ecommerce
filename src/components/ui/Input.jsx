import React from 'react';

/**
 * Reusable accessible Input component for ShopLite forms.
 */
export default function Input({
  label,
  id,
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  onChange,
  disabled = false,
  required = false,
  error = '',
  helperText = '',
  icon: Icon = null,
  className = '',
  ...props
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
            <Icon className="w-4 h-4" />
          </div>
        )}

        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`w-full rounded-md border text-sm text-neutral-900 placeholder-neutral-400 transition-colors
            focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
            ${Icon ? 'pl-10 pr-3.5' : 'px-3.5'} py-2.5
            ${error ? 'border-red-500 bg-red-50/20' : 'border-neutral-200 bg-white hover:border-neutral-300'}
            ${disabled ? 'opacity-50 cursor-not-allowed bg-neutral-100' : ''}`}
          {...props}
        />
      </div>

      {error ? (
        <p className="mt-1.5 text-xs text-red-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="mt-1.5 text-xs text-neutral-500">{helperText}</p>
      ) : null}
    </div>
  );
}
