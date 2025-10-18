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

### ManagedCUtlVector()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L8)

```csharp
public ManagedCUtlVector()
```

### ManagedCUtlVector(int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L13)

```csharp
public ManagedCUtlVector(int growSize, int initSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **initSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### Value

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L46)

```csharp
public ref CUtlVector<T> Value { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<T>

## Methods

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L23)

```csharp
public void Dispose()
```

### Dispose(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L30)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

- **disposing**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ~ManagedCUtlVector()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L18)

```csharp
protected ~ManagedCUtlVector()
```

