---
title: IUnmanagedFunction
---

# Interface IUnmanagedFunction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedFunction.cs#L3)

**Namespace**: [SwiftlyS2.Shared.Memory](/docs/api/memory)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IUnmanagedFunction<TDelegate> where TDelegate : Delegate
```

#### Type Parameters

- **TDelegate**: 

## Properties

### Address

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedFunction.cs#L8)

The address of the unmanaged function.

```csharp
nint Address { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### Call

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedFunction.cs#L21)

The delegate that directly call to the address.
Might be hooked by other plugins or core.

```csharp
TDelegate Call { get; }
```

#### Property Value

- TDelegate

### CallOriginal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedFunction.cs#L15)

The unhooked original function delegate.
Call this if you don't want your invocation to be hooked.

```csharp
TDelegate CallOriginal { get; }
```

#### Property Value

- TDelegate

## Methods

### AddHook(Func, TDelegate>)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedFunction.cs#L31)

Hook a native function at the specified address with a managed callback.
The <code class="paramref">callbackBuilder</code> receives the pointer to the "next" function in the chain
(previous callback if any, or the original function pointer if this is the first callback),
and must return a delegate matching the native function signature with proper calling convention.

```csharp
Guid AddHook(Func<Func<TDelegate>, TDelegate> callbackBuilder)
```

#### Parameters

- **callbackBuilder**: [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[Func](https://learn.microsoft.com/dotnet/api/system.func-1)<TDelegate>, TDelegate> - Builder that receives the next function pointer and returns the managed callback.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - a guid for the hook.

### RemoveHook(Guid)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedFunction.cs#L37)

Unhook a hook by its id.

```csharp
void RemoveHook(Guid id)
```

#### Parameters

- **id**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The id of the hook to unhook.

