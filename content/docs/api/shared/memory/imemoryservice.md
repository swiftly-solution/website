---
title: IMemoryService
---

```csharp
public interface IMemoryService
```

## Methods

### GetAddressBySignature(string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L44)

```csharp
nint? GetAddressBySignature(string library, string signature)
```

#### Parameters

- **library**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The library of that signature belongs to.
- **signature**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The signature of the function.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)? - The address of the function. Return null if not found.

### GetInterfaceByName(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L36)

```csharp
nint? GetInterfaceByName(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the interface.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)? - The address of the interface. Return null if not found.

### GetObjectPtrVtableName(nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L66)

```csharp
string? GetObjectPtrVtableName(nint address)
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the object pointer.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)? - The vtable name. Return null if not found.

### GetUnmanagedFunctionByAddress(nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L14)

```csharp
IUnmanagedFunction<TDelegate> GetUnmanagedFunctionByAddress<TDelegate>(nint address) where TDelegate : Delegate
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the unmanaged function.

#### Returns

- [IUnmanagedFunction](/docs/api/shared/memory/iunmanagedfunction-1)<TDelegate> - The unmanaged function.

#### Type Parameters

- **TDelegate**:  - The delegate type of the unmanaged function.

### GetUnmanagedFunctionByVTable(nint, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L23)

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

### GetUnmanagedMemoryByAddress(nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L29)

```csharp
IUnmanagedMemory GetUnmanagedMemoryByAddress(nint address)
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address from which to create the Unmanaged Memory wrapper.

#### Returns

- [IUnmanagedMemory](/docs/api/shared/memory/iunmanagedmemory)

### GetVTableAddress(string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L52)

```csharp
nint? GetVTableAddress(string library, string vtableName)
```

#### Parameters

- **library**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The library of that vtable belongs to.
- **vtableName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the vtable.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)? - The address of the vtable. Return null if not found.

### ObjectPtrHasBaseClass(nint, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L81)

```csharp
bool ObjectPtrHasBaseClass(nint address, string baseClassName)
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the object pointer.
- **baseClassName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the base class.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the object pointer has the base class, false otherwise.

### ObjectPtrHasVtable(nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L73)

```csharp
bool ObjectPtrHasVtable(nint address)
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the object pointer.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the object pointer has a vtable, false otherwise.

### ResolveXrefAddress(nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L59)

```csharp
nint ResolveXrefAddress(nint xrefAddress)
```

#### Parameters

- **xrefAddress**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the xref.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The resolved address.

### ToSchemaClass(nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L89)

```csharp
T ToSchemaClass<T>(nint address) where T : class, ISchemaClass<T>
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the schema class.

#### Returns

- T - The schema class.

#### Type Parameters

- **T**:  - The schema class type.

