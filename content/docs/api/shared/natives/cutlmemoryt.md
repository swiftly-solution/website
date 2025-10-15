---
title: CUtlMemory
---

```csharp
public struct CUtlMemory<T> : IDisposable
```

#### Type Parameters

- **T**: 

#### Implements

#### Inherited Members

## Constructors

### CUtlMemory(int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L25)

```csharp
public CUtlMemory(int growSize, int initSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **initSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CUtlMemory(nint, int, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L33)

```csharp
public CUtlMemory(nint memory, int numelements, bool readOnly)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **numelements**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **readOnly**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### Base

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L199)

```csharp
public nint Base { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### Count

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L200)

```csharp
public int Count { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ElementSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L23)

```csharp
public int ElementSize { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ExternallyAllocated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L197)

```csharp
public bool ExternallyAllocated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReadOnly

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L198)

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### this

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L187)

```csharp
public ref T this[int index] { get; }
```

#### Property Value

- T

## Methods

### AssumeMemory(nint, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L116)

```csharp
public void AssumeMemory(nint memory, int numelements)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **numelements**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ConvertToGrowableMemory(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L88)

```csharp
public void ConvertToGrowableMemory(int growSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DetachMemory()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L125)

```csharp
public nint DetachMemory()
```

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L41)

```csharp
public void Dispose()
```

### EnsureCapacity(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L169)

```csharp
public void EnsureCapacity(int num)
```

#### Parameters

- **num**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Grow(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L136)

```csharp
public void Grow(int num)
```

#### Parameters

- **num**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Init(int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L46)

```csharp
public void Init(int growSize, int initSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **initSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsValidIndex(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L185)

```csharp
public bool IsValidIndex(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Purge()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L56)

```csharp
public void Purge()
```

### Purge(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L67)

```csharp
public void Purge(int numElements)
```

#### Parameters

- **numElements**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetExternalBuffer(nint, int, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L107)

```csharp
public void SetExternalBuffer(nint memory, int numelements, bool readOnly)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **numelements**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **readOnly**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetGrowSize(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L180)

```csharp
public void SetGrowSize(int size)
```

#### Parameters

- **size**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

