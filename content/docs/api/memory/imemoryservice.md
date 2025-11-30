---
title: IMemoryService
---

# Interface IMemoryService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L5)

**Namespace**: [SwiftlyS2.Shared.Memory](/docs/api/memory)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IMemoryService
```

## Methods

### Alloc(ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L96)

Allocate a block of memory.

```csharp
nint Alloc(ulong size)
```

#### Parameters

- **size**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The size of the memory block to allocate.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the allocated memory block.

### Free(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L102)

Free a block of memory.

```csharp
void Free(nint pointer)
```

#### Parameters

- **pointer**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the memory block to free.

### GetAddressBySignature(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L44)

Get the address of a ida-style signature.

```csharp
nint? GetAddressBySignature(string library, string signature)
```

#### Parameters

- **library**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The library of that signature belongs to.
- **signature**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The signature of the function.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)? - The address of the function. Return null if not found.

### GetInterfaceByName(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L36)

Get the address of an valve or swiftly native interface by its name.

```csharp
nint? GetInterfaceByName(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the interface.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)? - The address of the interface. Return null if not found.

### GetObjectPtrVtableName(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L66)

Get the vtable name of an object pointer.

```csharp
string? GetObjectPtrVtableName(nint address)
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the object pointer.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)? - The vtable name. Return null if not found.

### GetUnmanagedFunctionByAddress(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L14)

Get an unmanaged function by its address.

```csharp
IUnmanagedFunction<TDelegate> GetUnmanagedFunctionByAddress<TDelegate>(nint address) where TDelegate : Delegate
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the unmanaged function.

#### Returns

- [IUnmanagedFunction](/docs/api/memory/iunmanagedfunctiont)<TDelegate> - The unmanaged function.

#### Type Parameters

- **TDelegate**:  - The delegate type of the unmanaged function.

### GetUnmanagedFunctionByVTable(nint, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L23)

Get an unmanaged function by its vtable address and index.

```csharp
IUnmanagedFunction<TDelegate> GetUnmanagedFunctionByVTable<TDelegate>(nint pVTable, int index) where TDelegate : Delegate
```

#### Parameters

- **pVTable**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the vtable.
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The index of the function in the vtable.

#### Returns

- [IUnmanagedFunction](/docs/api/memory/iunmanagedfunctiont)<TDelegate> - The unmanaged function.

#### Type Parameters

- **TDelegate**: 

### GetUnmanagedMemoryByAddress(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L29)

Get an unmanaged memory block by its address.

```csharp
IUnmanagedMemory GetUnmanagedMemoryByAddress(nint address)
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address from which to create the Unmanaged Memory wrapper.

#### Returns

- [IUnmanagedMemory](/docs/api/memory/iunmanagedmemory)

### GetVTableAddress(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L52)

Get the address of a vtable by its name.

```csharp
nint? GetVTableAddress(string library, string vtableName)
```

#### Parameters

- **library**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The library of that vtable belongs to.
- **vtableName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the vtable.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)? - The address of the vtable. Return null if not found.

### ObjectPtrHasBaseClass(nint, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L81)

Check if an object pointer has a base class.

```csharp
bool ObjectPtrHasBaseClass(nint address, string baseClassName)
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the object pointer.
- **baseClassName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the base class.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the object pointer has the base class, false otherwise.

### ObjectPtrHasVtable(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L73)

Check if an object pointer has a vtable.

```csharp
bool ObjectPtrHasVtable(nint address)
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the object pointer.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the object pointer has a vtable, false otherwise.

### Resize(nint, ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L110)

Resize a block of memory.

```csharp
nint Resize(nint pointer, ulong newSize)
```

#### Parameters

- **pointer**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the memory block to resize.
- **newSize**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The new size of the memory block.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the resized memory block.

### ResolveXrefAddress(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L59)

Resolve the address of a xref signature.

```csharp
nint ResolveXrefAddress(nint xrefAddress)
```

#### Parameters

- **xrefAddress**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the xref.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The resolved address.

### ToSchemaClass(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Memory/IMemoryService.cs#L89)

Convert a raw address to a schema class.

```csharp
T ToSchemaClass<T>(nint address) where T : class, ISchemaClass<T>
```

#### Parameters

- **address**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The address of the schema class.

#### Returns

- T - The schema class.

#### Type Parameters

- **T**:  - The schema class type.

