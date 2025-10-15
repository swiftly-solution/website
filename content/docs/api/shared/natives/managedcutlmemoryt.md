---
title: ManagedCUtlMemory
---

```csharp
public class ManagedCUtlMemory<T> : IDisposable where T : unmanaged
```

#### Type Parameters

- **T**: 

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### ManagedCUtlMemory(int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L7)

```csharp
public ManagedCUtlMemory(int growSize, int initSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **initSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ManagedCUtlMemory(nint, int, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L12)

```csharp
public ManagedCUtlMemory(nint memory, int numelements, bool readOnly)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **numelements**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **readOnly**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### Base

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L22)

```csharp
public nint Base { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### Count

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L23)

```csharp
public int Count { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### this

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L25)

```csharp
public ref T this[int index] { get; }
```

#### Property Value

- T

## Methods

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L17)

```csharp
public void Dispose()
```

