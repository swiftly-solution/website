---
title: IKTargetSettings_t
---

```csharp
public interface IKTargetSettings_t : ISchemaClass<IKTargetSettings_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AnimgraphParameterNameOrientation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKTargetSettings_t.cs#L23)

```csharp
AnimParamID AnimgraphParameterNameOrientation { get; }
```

#### Property Value

- [AnimParamID](/docs/api/shared/schemadefinitions/animparamid)

### AnimgraphParameterNamePosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKTargetSettings_t.cs#L21)

```csharp
AnimParamID AnimgraphParameterNamePosition { get; }
```

#### Property Value

- [AnimParamID](/docs/api/shared/schemadefinitions/animparamid)

### Bone

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKTargetSettings_t.cs#L19)

```csharp
IKBoneNameAndIndex_t Bone { get; }
```

#### Property Value

- [IKBoneNameAndIndex_t](/docs/api/shared/schemadefinitions/ikbonenameandindex_t)

### TargetCoordSystem

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKTargetSettings_t.cs#L25)

```csharp
ref IKTargetCoordinateSystem TargetCoordSystem { get; }
```

#### Property Value

- [IKTargetCoordinateSystem](/docs/api/shared/schemadefinitions/iktargetcoordinatesystem)

### TargetSource

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKTargetSettings_t.cs#L17)

```csharp
ref IKTargetSource TargetSource { get; }
```

#### Property Value

- [IKTargetSource](/docs/api/shared/schemadefinitions/iktargetsource)

