---
title: Ray_t
---

# Struct Ray_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L44)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct Ray_t
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### Capsule

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L50)

```csharp
public CapsuleTrace Capsule
```

#### Field Value

- [CapsuleTrace](/docs/api/natives/capsuletrace)

### Hull

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L49)

```csharp
public HullTrace Hull
```

#### Field Value

- [HullTrace](/docs/api/natives/hulltrace)

### Line

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L47)

```csharp
public LineTrace Line
```

#### Field Value

- [LineTrace](/docs/api/natives/linetrace)

### Mesh

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L51)

```csharp
public MeshTrace Mesh
```

#### Field Value

- [MeshTrace](/docs/api/natives/meshtrace)

### Sphere

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L48)

```csharp
public SphereTrace Sphere
```

#### Field Value

- [SphereTrace](/docs/api/natives/spheretrace)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L52)

```csharp
public RayType_t Type
```

#### Field Value

- [RayType_t](/docs/api/natives/raytype_t)

## Methods

### Init(Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L54)

```csharp
public void Init(Vector StartOffset)
```

#### Parameters

- **StartOffset**: [Vector](/docs/api/natives/vector)

### Init(Vector, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L61)

```csharp
public void Init(Vector Center, float Radius)
```

#### Parameters

- **Center**: [Vector](/docs/api/natives/vector)
- **Radius**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### Init(Vector, Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L75)

```csharp
public void Init(Vector Mins, Vector Maxs)
```

#### Parameters

- **Mins**: [Vector](/docs/api/natives/vector)
- **Maxs**: [Vector](/docs/api/natives/vector)

### Init(Vector, Vector, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L89)

```csharp
public void Init(Vector CenterA, Vector CenterB, float Radius)
```

#### Parameters

- **CenterA**: [Vector](/docs/api/natives/vector)
- **CenterB**: [Vector](/docs/api/natives/vector)
- **Radius**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### Init(Vector, Vector, Vector*, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L111)

```csharp
public void Init(Vector Mins, Vector Maxs, Vector* Vertices, int NumVertices)
```

#### Parameters

- **Mins**: [Vector](/docs/api/natives/vector)
- **Maxs**: [Vector](/docs/api/natives/vector)
- **Vertices**: [Vector](/docs/api/natives/vector)*
- **NumVertices**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

