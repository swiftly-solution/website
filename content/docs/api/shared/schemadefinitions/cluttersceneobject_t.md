---
title: ClutterSceneObject_t
---

```csharp
public interface ClutterSceneObject_t : ISchemaClass<ClutterSceneObject_t>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **BeginCullSize** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L35)

```csharp
ref float BeginCullSize { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Bounds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L16)

```csharp
AABB_t Bounds { get; }
```

- Property Value

- [AABB_t](/docs/api/shared/schemadefinitions/aabb_t)

### **EndCullSize** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L37)

```csharp
ref float EndCullSize { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Flags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L18)

```csharp
ref ObjectTypeFlags_t Flags { get; }
```

- Property Value

- [ObjectTypeFlags_t](/docs/api/shared/schemadefinitions/objecttypeflags_t)

### **InstancePositions** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L22)

```csharp
ref CUtlVector<Vector> InstancePositions { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### **InstanceScales** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L24)

```csharp
ref CUtlVector<float> InstanceScales { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### **InstanceTintSrgb** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L26)

```csharp
ref CUtlVector<Color> InstanceTintSrgb { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[Color](/docs/api/shared/natives/color)>

### **Layer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L20)

```csharp
ref short Layer { get; }
```

- Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### **MaterialGroup** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L33)

```csharp
ref CUtlStringToken MaterialGroup { get; }
```

- Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

### **RenderableModel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L31)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> RenderableModel { get; }
```

- Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>

### **Tiles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L29)

```csharp
ref CUtlVector Tiles { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

