---
title: FeCollisionPlane_t
---

# Interface FeCollisionPlane_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeCollisionPlane_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface FeCollisionPlane_t : ISchemaClass<FeCollisionPlane_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<FeCollisionPlane_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ChildNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeCollisionPlane_t.cs#L20)

```csharp
ref ushort ChildNode { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### CtrlParent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeCollisionPlane_t.cs#L18)

```csharp
ref ushort CtrlParent { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Plane

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeCollisionPlane_t.cs#L22)

```csharp
RnPlane_t Plane { get; }
```

#### Property Value

- [RnPlane_t](/docs/api/schemadefinitions/rnplane_t)

### Strength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeCollisionPlane_t.cs#L24)

```csharp
ref float Strength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

