---
title: ManagedCUtlVector
---

```csharp
public class ManagedCUtlVector<T> : IDisposable where T : unmanaged
```

#### Type Parameters

- **T**: 

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### ManagedCUtlVector(int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L7)

```csharp
public ManagedCUtlVector(int growSize, int initSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **initSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ManagedCUtlVector(nint, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L12)

```csharp
public ManagedCUtlVector(nint memory, int allocationCount, int numElements)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **allocationCount**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **numElements**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### Base

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L22)

```csharp
public nint Base { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### Count

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L23)

```csharp
public int Count { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### this

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L25)

```csharp
public ref T this[int index] { get; }
```

#### Property Value

- T

## Methods

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L17)

```csharp
public void Dispose()
```

