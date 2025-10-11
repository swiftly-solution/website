---
title: Ray_t
---

```csharp
public struct Ray_t
```

#### Inherited Members

## Fields

### **Capsule** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L50)

```csharp
public CapsuleTrace Capsule
```

#### Field Value

- [CapsuleTrace](/docs/api/shared/natives/capsuletrace)

### **Hull** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L49)

```csharp
public HullTrace Hull
```

#### Field Value

- [HullTrace](/docs/api/shared/natives/hulltrace)

### **Line** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L47)

```csharp
public LineTrace Line
```

#### Field Value

- [LineTrace](/docs/api/shared/natives/linetrace)

### **Mesh** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L51)

```csharp
public MeshTrace Mesh
```

#### Field Value

- [MeshTrace](/docs/api/shared/natives/meshtrace)

### **Sphere** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L48)

```csharp
public SphereTrace Sphere
```

#### Field Value

- [SphereTrace](/docs/api/shared/natives/spheretrace)

### **Type** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L53)

```csharp
public RayType_t Type
```

#### Field Value

- [RayType_t](/docs/api/shared/natives/raytype_t)

## Methods

### **Init(Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L55)

```csharp
public void Init(Vector StartOffset)
```

#### Parameters

- **StartOffset**: [Vector](/docs/api/shared/natives/vector)

### **Init(Vector, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L62)

```csharp
public void Init(Vector Center, float Radius)
```

#### Parameters

- **Center**: [Vector](/docs/api/shared/natives/vector)
- **Radius**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Init(Vector, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L76)

```csharp
public void Init(Vector Mins, Vector Maxs)
```

#### Parameters

- **Mins**: [Vector](/docs/api/shared/natives/vector)
- **Maxs**: [Vector](/docs/api/shared/natives/vector)

### **Init(Vector, Vector, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L90)

```csharp
public void Init(Vector CenterA, Vector CenterB, float Radius)
```

#### Parameters

- **CenterA**: [Vector](/docs/api/shared/natives/vector)
- **CenterB**: [Vector](/docs/api/shared/natives/vector)
- **Radius**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Init(Vector, Vector, Vector*, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Ray_t.cs#L112)

```csharp
public void Init(Vector Mins, Vector Maxs, Vector* Vertices, int NumVertices)
```

#### Parameters

- **Mins**: [Vector](/docs/api/shared/natives/vector)
- **Maxs**: [Vector](/docs/api/shared/natives/vector)
- **Vertices**: [Vector](/docs/api/shared/natives/vector)*
- **NumVertices**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

