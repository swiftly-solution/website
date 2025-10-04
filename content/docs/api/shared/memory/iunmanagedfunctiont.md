---
title: IUnmanagedFunction<TDelegate>
---

```csharp
public interface IUnmanagedFunction<TDelegate> where TDelegate : Delegate
```

#### Type Parameters

- **TDelegate**: 

## Properties

**Address** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedFunction.cs#L8)

```csharp
nint Address { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

**Call** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedFunction.cs#L21)

```csharp
TDelegate Call { get; }
```

#### Property Value

- TDelegate

**CallOriginal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedFunction.cs#L15)

```csharp
TDelegate CallOriginal { get; }
```

#### Property Value

- TDelegate

## Methods

**AddHook(Func<Func<TDelegate>, TDelegate>)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedFunction.cs#L31)

```csharp
Guid AddHook(Func<Func<TDelegate>, TDelegate> callbackBuilder)
```

#### Parameters

- **callbackBuilder**: [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[Func](https://learn.microsoft.com/dotnet/api/system.func-1)<TDelegate>, TDelegate> - Builder that receives the next function pointer and returns the managed callback.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - a guid for the hook.

**RemoveHook(Guid)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedFunction.cs#L37)

```csharp
void RemoveHook(Guid id)
```

#### Parameters

- **id**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The id of the hook to unhook.

