---
title: IKTargetSettings_t
---

# Interface IKTargetSettings_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKTargetSettings_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IKTargetSettings_t : ISchemaClass<IKTargetSettings_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<IKTargetSettings_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnimgraphParameterNameOrientation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKTargetSettings_t.cs#L24)

```csharp
AnimParamID AnimgraphParameterNameOrientation { get; }
```

#### Property Value

- [AnimParamID](/docs/api/schemadefinitions/animparamid)

### AnimgraphParameterNamePosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKTargetSettings_t.cs#L22)

```csharp
AnimParamID AnimgraphParameterNamePosition { get; }
```

#### Property Value

- [AnimParamID](/docs/api/schemadefinitions/animparamid)

### Bone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKTargetSettings_t.cs#L20)

```csharp
IKBoneNameAndIndex_t Bone { get; }
```

#### Property Value

- [IKBoneNameAndIndex_t](/docs/api/schemadefinitions/ikbonenameandindex_t)

### TargetCoordSystem

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKTargetSettings_t.cs#L26)

```csharp
ref IKTargetCoordinateSystem TargetCoordSystem { get; }
```

#### Property Value

- [IKTargetCoordinateSystem](/docs/api/schemadefinitions/iktargetcoordinatesystem)

### TargetSource

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKTargetSettings_t.cs#L18)

```csharp
ref IKTargetSource TargetSource { get; }
```

#### Property Value

- [IKTargetSource](/docs/api/schemadefinitions/iktargetsource)

