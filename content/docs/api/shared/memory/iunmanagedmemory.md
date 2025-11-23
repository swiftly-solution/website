---
title: IUnmanagedMemory
---

```csharp
public interface IUnmanagedMemory
```

## Properties

### Address

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedMemory.cs#L57)

```csharp
nint Address { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

## Methods

### AddHook(MidHookDelegate)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedMemory.cs#L64)

```csharp
Guid AddHook(MidHookDelegate callback)
```

#### Parameters

- **callback**: [MidHookDelegate](/docs/api/shared/memory/midhookdelegate) - The callback to call when the code reaches that address.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

### RemoveHook(Guid)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IUnmanagedMemory.cs#L70)

```csharp
void RemoveHook(Guid id)
```

#### Parameters

- **id**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The id of the hook to unhook.

