---
title: CUtlMemory
---

# Struct CUtlMemory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L16)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CUtlMemory<T>
```

#### Type Parameters

- **T**: 

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CUtlMemory(int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L29)

Please use <xref href="SwiftlyS2.Shared.Natives.ManagedCUtlMemory%601" data-throw-if-not-resolved="false"></xref> instead to construct it.
If you really want to use this, you should call <xref href="SwiftlyS2.Shared.Natives.CUtlMemory%601.Purge" data-throw-if-not-resolved="false"></xref> after you are done with it.

```csharp
public CUtlMemory(int growSize, int initSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **initSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CUtlMemory(nint, int, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L41)

Please use <xref href="SwiftlyS2.Shared.Natives.ManagedCUtlMemory%601" data-throw-if-not-resolved="false"></xref> instead to construct it.
If you really want to use this, you should call <xref href="SwiftlyS2.Shared.Natives.CUtlMemory%601.Purge" data-throw-if-not-resolved="false"></xref> after you are done with it.

```csharp
public CUtlMemory(nint memory, int numelements, bool readOnly)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **numelements**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **readOnly**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### Base

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L202)

```csharp
public nint Base { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### Count

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L203)

```csharp
public int Count { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ElementSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L23)

```csharp
public int ElementSize { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ExternallyAllocated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L200)

```csharp
public bool ExternallyAllocated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReadOnly

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L201)

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### this

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L190)

```csharp
public ref T this[int index] { get; }
```

#### Property Value

- T

## Methods

### AssumeMemory(nint, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L119)

```csharp
public void AssumeMemory(nint memory, int numelements)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **numelements**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ConvertToGrowableMemory(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L91)

```csharp
public void ConvertToGrowableMemory(int growSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DetachMemory()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L128)

```csharp
public nint DetachMemory()
```

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### EnsureCapacity(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L172)

```csharp
public void EnsureCapacity(int num)
```

#### Parameters

- **num**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Grow(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L139)

```csharp
public void Grow(int num)
```

#### Parameters

- **num**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Init(int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L49)

```csharp
public void Init(int growSize, int initSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **initSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsValidIndex(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L188)

```csharp
public bool IsValidIndex(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Purge()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L59)

```csharp
public void Purge()
```

### Purge(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L70)

```csharp
public void Purge(int numElements)
```

#### Parameters

- **numElements**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetExternalBuffer(nint, int, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L110)

```csharp
public void SetExternalBuffer(nint memory, int numelements, bool readOnly)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **numelements**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **readOnly**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetGrowSize(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L183)

```csharp
public void SetGrowSize(int size)
```

#### Parameters

- **size**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

