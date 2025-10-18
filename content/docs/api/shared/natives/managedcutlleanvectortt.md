---
title: I>
---

```csharp
public class ManagedCUtlLeanVector<T, I> : IDisposable where T : unmanaged where I : unmanaged, IBinaryInteger<I>, IMinMaxValue<I>
```

#### Type Parameters

- **T**: 
- **I**: 

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### ManagedCUtlLeanVector()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlLeanVector.cs#L10)

```csharp
public ManagedCUtlLeanVector()
```

### ManagedCUtlLeanVector(I, I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlLeanVector.cs#L15)

```csharp
public ManagedCUtlLeanVector(I growSize, I initSize)
```

#### Parameters

- **growSize**: I
- **initSize**: I

## Properties

### Value

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlLeanVector.cs#L46)

```csharp
public ref CUtlLeanVector<T, I> Value { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<T, I>

## Methods

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlLeanVector.cs#L25)

```csharp
public void Dispose()
```

### Dispose(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlLeanVector.cs#L31)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

- **disposing**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ~ManagedCUtlLeanVector()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlLeanVector.cs#L20)

```csharp
protected ~ManagedCUtlLeanVector()
```

