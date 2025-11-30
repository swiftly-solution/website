---
title: ManagedCUtlVector
---

# Class ManagedCUtlVector

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L3)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public class ManagedCUtlVector<T> : IDisposable where T : unmanaged
```

#### Type Parameters

- **T**: 

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [ManagedCUtlVector<T>](/docs/api/natives/managedcutlvectort)

#### Implements

- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ManagedCUtlVector()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L8)

```csharp
public ManagedCUtlVector()
```

### ManagedCUtlVector(int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L13)

```csharp
public ManagedCUtlVector(int growSize, int initSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **initSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### Value

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L46)

```csharp
public ref CUtlVector<T> Value { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<T>

## Methods

### Dispose()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L23)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### Dispose(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L30)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

- **disposing**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ~ManagedCUtlVector()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlVector.cs#L18)

```csharp
protected ~ManagedCUtlVector()
```

