---
title: CBaseFlex
---

```csharp
public interface CBaseFlex : CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AllowResponsesEndTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseFlex.cs#L23)

```csharp
GameTime_t AllowResponsesEndTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### Blinktoggle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseFlex.cs#L21)

```csharp
ref bool Blinktoggle { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FlexWeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseFlex.cs#L17)

```csharp
ref CUtlVector<float> FlexWeight { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### LastFlexAnimationTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseFlex.cs#L25)

```csharp
GameTime_t LastFlexAnimationTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LookTargetPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseFlex.cs#L19)

```csharp
ref Vector LookTargetPosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### NextSceneEventId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseFlex.cs#L27)

```csharp
SceneEventId_t NextSceneEventId { get; }
```

#### Property Value

- [SceneEventId_t](/docs/api/shared/schemadefinitions/sceneeventid_t)

### UpdateLayerPriorities

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseFlex.cs#L29)

```csharp
ref bool UpdateLayerPriorities { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### BlinktoggleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseFlex.cs#L33)

```csharp
void BlinktoggleUpdated()
```

### FlexWeightUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseFlex.cs#L31)

```csharp
void FlexWeightUpdated()
```

### LookTargetPositionUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseFlex.cs#L32)

```csharp
void LookTargetPositionUpdated()
```

