---
title: CBaseModelEntity
---

# Interface CBaseModelEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBaseModelEntity : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AddDecal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L84)

```csharp
ref int AddDecal { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AllowFadeInView

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L58)

```csharp
ref bool AllowFadeInView { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CHitboxComponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L20)

```csharp
CHitboxComponent CHitboxComponent { get; }
```

#### Property Value

- [CHitboxComponent](/docs/api/schemadefinitions/chitboxcomponent)

### CRenderComponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L18)

```csharp
CRenderComponent? CRenderComponent { get; }
```

#### Property Value

- [CRenderComponent](/docs/api/schemadefinitions/crendercomponent)?

### Collision

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L68)

```csharp
CCollisionProperty Collision { get; }
```

#### Property Value

- [CCollisionProperty](/docs/api/schemadefinitions/ccollisionproperty)

### ConfigEntitiesToPropagateMaterialDecalsTo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L94)

```csharp
ref CUtlVector<CHandle<CBaseModelEntity>> ConfigEntitiesToPropagateMaterialDecalsTo { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)>>

### DecalForwardAxis

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L88)

```csharp
ref Vector DecalForwardAxis { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### DecalMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L90)

```csharp
ref DecalMode_t DecalMode { get; }
```

#### Property Value

- [DecalMode_t](/docs/api/schemadefinitions/decalmode_t)

### DecalPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L86)

```csharp
ref Vector DecalPosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### DestructiblePartInitialStateDestructed0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L22)

```csharp
ref HitGroup_t DestructiblePartInitialStateDestructed0 { get; }
```

#### Property Value

- [HitGroup_t](/docs/api/schemadefinitions/hitgroup_t)

### DestructiblePartInitialStateDestructed0_PartIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L32)

```csharp
ref int DestructiblePartInitialStateDestructed0_PartIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DestructiblePartInitialStateDestructed1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L24)

```csharp
ref HitGroup_t DestructiblePartInitialStateDestructed1 { get; }
```

#### Property Value

- [HitGroup_t](/docs/api/schemadefinitions/hitgroup_t)

### DestructiblePartInitialStateDestructed1_PartIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L34)

```csharp
ref int DestructiblePartInitialStateDestructed1_PartIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DestructiblePartInitialStateDestructed2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L26)

```csharp
ref HitGroup_t DestructiblePartInitialStateDestructed2 { get; }
```

#### Property Value

- [HitGroup_t](/docs/api/schemadefinitions/hitgroup_t)

### DestructiblePartInitialStateDestructed2_PartIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L36)

```csharp
ref int DestructiblePartInitialStateDestructed2_PartIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DestructiblePartInitialStateDestructed3

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L28)

```csharp
ref HitGroup_t DestructiblePartInitialStateDestructed3 { get; }
```

#### Property Value

- [HitGroup_t](/docs/api/schemadefinitions/hitgroup_t)

### DestructiblePartInitialStateDestructed3_PartIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L38)

```csharp
ref int DestructiblePartInitialStateDestructed3_PartIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DestructiblePartInitialStateDestructed4

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L30)

```csharp
ref HitGroup_t DestructiblePartInitialStateDestructed4 { get; }
```

#### Property Value

- [HitGroup_t](/docs/api/schemadefinitions/hitgroup_t)

### DestructiblePartInitialStateDestructed4_PartIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L40)

```csharp
ref int DestructiblePartInitialStateDestructed4_PartIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DestructiblePartsSystemComponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L42)

```csharp
CDestructiblePartsComponent? DestructiblePartsSystemComponent { get; }
```

#### Property Value

- [CDestructiblePartsComponent](/docs/api/schemadefinitions/cdestructiblepartscomponent)?

### DisabledHitGroups

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L98)

```csharp
ISchemaFixedArray<uint> DisabledHitGroups { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### DissolveStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L50)

```csharp
GameTime_t DissolveStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### FadeMaxDist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L76)

```csharp
ref float FadeMaxDist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeMinDist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L74)

```csharp
ref float FadeMinDist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L78)

```csharp
ref float FadeScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Glow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L70)

```csharp
CGlowProperty Glow { get; }
```

#### Property Value

- [CGlowProperty](/docs/api/schemadefinitions/cglowproperty)

### GlowBackfaceMult

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L72)

```csharp
ref float GlowBackfaceMult { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastDamagePosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L48)

```csharp
ref Vector LastDamagePosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### LastDamageSourceName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L46)

```csharp
ref CGlobalSymbol LastDamageSourceName { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### LastHitGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L44)

```csharp
ref HitGroup_t LastHitGroup { get; }
```

#### Property Value

- [HitGroup_t](/docs/api/schemadefinitions/hitgroup_t)

### NoInterpolate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L66)

```csharp
ref bool NoInterpolate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ObjectCulling

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L82)

```csharp
ref byte ObjectCulling { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### OnIgnite

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L52)

```csharp
CEntityIOOutput OnIgnite { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### Render

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L60)

```csharp
ref Color Render { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

### RenderAttributes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L62)

```csharp
ref CUtlVector<EntityRenderAttribute_t> RenderAttributes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[EntityRenderAttribute_t](/docs/api/schemadefinitions/entityrenderattribute_t)>

### RenderFX

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L56)

```csharp
ref RenderFx_t RenderFX { get; }
```

#### Property Value

- [RenderFx_t](/docs/api/schemadefinitions/renderfx_t)

### RenderMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L54)

```csharp
ref RenderMode_t RenderMode { get; }
```

#### Property Value

- [RenderMode_t](/docs/api/schemadefinitions/rendermode_t)

### RenderToCubemaps

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L64)

```csharp
ref bool RenderToCubemaps { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RequiredDecalMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L92)

```csharp
ref DecalMode_t RequiredDecalMode { get; }
```

#### Property Value

- [DecalMode_t](/docs/api/schemadefinitions/decalmode_t)

### ShadowStrength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L80)

```csharp
ref float ShadowStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ViewOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L96)

```csharp
CNetworkViewOffsetVector ViewOffset { get; }
```

#### Property Value

- [CNetworkViewOffsetVector](/docs/api/schemadefinitions/cnetworkviewoffsetvector)

## Methods

### AddDecalUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L117)

```csharp
void AddDecalUpdated()
```

### CHitboxComponentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L101)

```csharp
void CHitboxComponentUpdated()
```

### CRenderComponentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L100)

```csharp
void CRenderComponentUpdated()
```

### CollisionUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L109)

```csharp
void CollisionUpdated()
```

### ConfigEntitiesToPropagateMaterialDecalsToUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L122)

```csharp
void ConfigEntitiesToPropagateMaterialDecalsToUpdated()
```

### DecalForwardAxisUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L119)

```csharp
void DecalForwardAxisUpdated()
```

### DecalModeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L120)

```csharp
void DecalModeUpdated()
```

### DecalPositionUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L118)

```csharp
void DecalPositionUpdated()
```

### DestructiblePartsSystemComponentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L102)

```csharp
void DestructiblePartsSystemComponentUpdated()
```

### DisabledHitGroupsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L124)

```csharp
void DisabledHitGroupsUpdated()
```

### FadeMaxDistUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L113)

```csharp
void FadeMaxDistUpdated()
```

### FadeMinDistUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L112)

```csharp
void FadeMinDistUpdated()
```

### FadeScaleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L114)

```csharp
void FadeScaleUpdated()
```

### GlowBackfaceMultUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L111)

```csharp
void GlowBackfaceMultUpdated()
```

### GlowUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L110)

```csharp
void GlowUpdated()
```

### NoInterpolateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L108)

```csharp
void NoInterpolateUpdated()
```

### ObjectCullingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L116)

```csharp
void ObjectCullingUpdated()
```

### RenderAttributesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L106)

```csharp
void RenderAttributesUpdated()
```

### RenderFXUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L104)

```csharp
void RenderFXUpdated()
```

### RenderModeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L103)

```csharp
void RenderModeUpdated()
```

### RenderToCubemapsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L107)

```csharp
void RenderToCubemapsUpdated()
```

### RenderUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L105)

```csharp
void RenderUpdated()
```

### RequiredDecalModeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L121)

```csharp
void RequiredDecalModeUpdated()
```

### SetBodygroupByName(string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseModelEntity.cs#L14)

Sets the bodygroup to the entity.

```csharp
void SetBodygroupByName(string group, int value)
```

#### Parameters

- **group**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetModel(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseModelEntity.cs#L9)

Sets the model to the entity.

```csharp
void SetModel(string model)
```

#### Parameters

- **model**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The model path to be used.

### SetScale(float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseModelEntity.cs#L19)

Sets the scale of the entity.

```csharp
void SetScale(float scale)
```

#### Parameters

- **scale**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### ShadowStrengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L115)

```csharp
void ShadowStrengthUpdated()
```

### ViewOffsetUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L123)

```csharp
void ViewOffsetUpdated()
```

