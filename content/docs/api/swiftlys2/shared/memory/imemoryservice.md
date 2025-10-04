---
title: IMemoryService
---

```csharp
public interface IMemoryService
```

## Methods

**GetAddressBySignature(string, string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L38)

```csharp
nint? GetAddressBySignature(string library, string signature)
```

#### Parameters

- **library**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The library of that signature belongs to.
- **signature**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The signature of the function.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)? - The address of the function. Return null if not found.

**GetInterfaceByName(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L30)

```csharp
nint? GetInterfaceByName(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the interface.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)? - The address of the interface. Return null if not found.

**GetUnmanagedFunctionByAddress<TDelegate>(nint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L13)

```csharp
IUnmanagedFunction<TDelegate> GetUnmanagedFunctionByAddress<TDelegate>(nint address) where TDelegate : Delegate
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the unmanaged function.

#### Returns

- [IUnmanagedFunction](/docs/api/shared/memory/iunmanagedfunction-1)<TDelegate> - The unmanaged function.

#### Type Parameters

- **TDelegate**:  - The delegate type of the unmanaged function.

**GetUnmanagedFunctionByVTable<TDelegate>(nint, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L22)

```csharp
IUnmanagedFunction<TDelegate> GetUnmanagedFunctionByVTable<TDelegate>(nint pVTable, int index) where TDelegate : Delegate
```

#### Parameters

- **pVTable**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the vtable.
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The index of the function in the vtable.

#### Returns

- [IUnmanagedFunction](/docs/api/shared/memory/iunmanagedfunction-1)<TDelegate> - The unmanaged function.

#### Type Parameters

- **TDelegate**: 

**GetVTableAddress(string, string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L46)

```csharp
nint? GetVTableAddress(string library, string vtableName)
```

#### Parameters

- **library**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The library of that vtable belongs to.
- **vtableName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the vtable.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)? - The address of the vtable. Return null if not found.

**ResolveXrefAddress(nint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L53)

```csharp
nint ResolveXrefAddress(nint xrefAddress)
```

#### Parameters

- **xrefAddress**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the xref.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The resolved address.

**ToSchemaClass<T>(nint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L62)

```csharp
T ToSchemaClass<T>(nint address) where T : class, ISchemaClass<T>
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the schema class.

#### Returns

- T - The schema class.

#### Type Parameters

- **T**:  - The schema class type.

