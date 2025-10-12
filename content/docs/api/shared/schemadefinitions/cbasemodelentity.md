---
title: CBaseModelEntity
---

```csharp
public interface CBaseModelEntity : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AddDecal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L83)

```csharp
ref int AddDecal { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **AllowFadeInView** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L56)

```csharp
ref bool AllowFadeInView { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **CHitboxComponent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L18)

```csharp
CHitboxComponent CHitboxComponent { get; }
```

- Property Value

- [CHitboxComponent](/docs/api/shared/schemadefinitions/chitboxcomponent)

### **CRenderComponent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L16)

```csharp
CRenderComponent? CRenderComponent { get; }
```

- Property Value

- [CRenderComponent](/docs/api/shared/schemadefinitions/crendercomponent)?

### **Collision** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L67)

```csharp
CCollisionProperty Collision { get; }
```

- Property Value

- [CCollisionProperty](/docs/api/shared/schemadefinitions/ccollisionproperty)

### **ConfigEntitiesToPropagateMaterialDecalsTo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L97)

```csharp
ref CUtlVector<CHandle<CBaseModelEntity>> ConfigEntitiesToPropagateMaterialDecalsTo { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseModelEntity](/docs/api/shared/schemadefinitions/cbasemodelentity)>>

### **DecalForwardAxis** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L87)

```csharp
ref Vector DecalForwardAxis { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **DecalHealBloodRate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L89)

```csharp
ref float DecalHealBloodRate { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **DecalHealHeightRate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L91)

```csharp
ref float DecalHealHeightRate { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **DecalMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L93)

```csharp
ref DecalMode_t DecalMode { get; }
```

- Property Value

- [DecalMode_t](/docs/api/shared/schemadefinitions/decalmode_t)

### **DecalPosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L85)

```csharp
ref Vector DecalPosition { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **DestructiblePartInitialStateDestructed0** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L20)

```csharp
ref HitGroup_t DestructiblePartInitialStateDestructed0 { get; }
```

- Property Value

- [HitGroup_t](/docs/api/shared/schemadefinitions/hitgroup_t)

### **DestructiblePartInitialStateDestructed0_PartIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L30)

```csharp
ref int DestructiblePartInitialStateDestructed0_PartIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **DestructiblePartInitialStateDestructed1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L22)

```csharp
ref HitGroup_t DestructiblePartInitialStateDestructed1 { get; }
```

- Property Value

- [HitGroup_t](/docs/api/shared/schemadefinitions/hitgroup_t)

### **DestructiblePartInitialStateDestructed1_PartIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L32)

```csharp
ref int DestructiblePartInitialStateDestructed1_PartIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **DestructiblePartInitialStateDestructed2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L24)

```csharp
ref HitGroup_t DestructiblePartInitialStateDestructed2 { get; }
```

- Property Value

- [HitGroup_t](/docs/api/shared/schemadefinitions/hitgroup_t)

### **DestructiblePartInitialStateDestructed2_PartIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L34)

```csharp
ref int DestructiblePartInitialStateDestructed2_PartIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **DestructiblePartInitialStateDestructed3** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L26)

```csharp
ref HitGroup_t DestructiblePartInitialStateDestructed3 { get; }
```

- Property Value

- [HitGroup_t](/docs/api/shared/schemadefinitions/hitgroup_t)

### **DestructiblePartInitialStateDestructed3_PartIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L36)

```csharp
ref int DestructiblePartInitialStateDestructed3_PartIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **DestructiblePartInitialStateDestructed4** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L28)

```csharp
ref HitGroup_t DestructiblePartInitialStateDestructed4 { get; }
```

- Property Value

- [HitGroup_t](/docs/api/shared/schemadefinitions/hitgroup_t)

### **DestructiblePartInitialStateDestructed4_PartIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L38)

```csharp
ref int DestructiblePartInitialStateDestructed4_PartIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **DestructiblePartsSystemComponent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L40)

```csharp
CDestructiblePartsComponent? DestructiblePartsSystemComponent { get; }
```

- Property Value

- [CDestructiblePartsComponent](/docs/api/shared/schemadefinitions/cdestructiblepartscomponent)?

### **DisabledHitGroups** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L101)

```csharp
ISchemaFixedArray<uint> DisabledHitGroups { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **DissolveStartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L48)

```csharp
GameTime_t DissolveStartTime { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **FadeMaxDist** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L75)

```csharp
ref float FadeMaxDist { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FadeMinDist** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L73)

```csharp
ref float FadeMinDist { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FadeScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L77)

```csharp
ref float FadeScale { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Glow** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L69)

```csharp
CGlowProperty Glow { get; }
```

- Property Value

- [CGlowProperty](/docs/api/shared/schemadefinitions/cglowproperty)

### **GlowBackfaceMult** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L71)

```csharp
ref float GlowBackfaceMult { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **LastDamagePosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L46)

```csharp
ref Vector LastDamagePosition { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **LastDamageSourceName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L44)

```csharp
ref CGlobalSymbol LastDamageSourceName { get; }
```

- Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### **LastHitGroup** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L42)

```csharp
ref HitGroup_t LastHitGroup { get; }
```

- Property Value

- [HitGroup_t](/docs/api/shared/schemadefinitions/hitgroup_t)

### **NoInterpolate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L65)

```csharp
ref bool NoInterpolate { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ObjectCulling** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L81)

```csharp
ref byte ObjectCulling { get; }
```

- Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **OnIgnite** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L50)

```csharp
CEntityIOOutput OnIgnite { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **Render** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L58)

```csharp
ref Color Render { get; }
```

- Property Value

- [Color](/docs/api/shared/natives/color)

### **RenderAttributes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L61)

```csharp
ref CUtlVector RenderAttributes { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **RenderFX** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L54)

```csharp
ref RenderFx_t RenderFX { get; }
```

- Property Value

- [RenderFx_t](/docs/api/shared/schemadefinitions/renderfx_t)

### **RenderMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L52)

```csharp
ref RenderMode_t RenderMode { get; }
```

- Property Value

- [RenderMode_t](/docs/api/shared/schemadefinitions/rendermode_t)

### **RenderToCubemaps** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L63)

```csharp
ref bool RenderToCubemaps { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **RequiredDecalMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L95)

```csharp
ref DecalMode_t RequiredDecalMode { get; }
```

- Property Value

- [DecalMode_t](/docs/api/shared/schemadefinitions/decalmode_t)

### **ShadowStrength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L79)

```csharp
ref float ShadowStrength { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ViewOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L99)

```csharp
CNetworkViewOffsetVector ViewOffset { get; }
```

- Property Value

- [CNetworkViewOffsetVector](/docs/api/shared/schemadefinitions/cnetworkviewoffsetvector)

## Methods

### **AddDecalUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L120)

```csharp
void AddDecalUpdated()
```

### **CHitboxComponentUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L104)

```csharp
void CHitboxComponentUpdated()
```

### **CRenderComponentUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L103)

```csharp
void CRenderComponentUpdated()
```

### **CollisionUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L112)

```csharp
void CollisionUpdated()
```

### **ConfigEntitiesToPropagateMaterialDecalsToUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L127)

```csharp
void ConfigEntitiesToPropagateMaterialDecalsToUpdated()
```

### **DecalForwardAxisUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L122)

```csharp
void DecalForwardAxisUpdated()
```

### **DecalHealBloodRateUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L123)

```csharp
void DecalHealBloodRateUpdated()
```

### **DecalHealHeightRateUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L124)

```csharp
void DecalHealHeightRateUpdated()
```

### **DecalModeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L125)

```csharp
void DecalModeUpdated()
```

### **DecalPositionUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L121)

```csharp
void DecalPositionUpdated()
```

### **DestructiblePartsSystemComponentUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L105)

```csharp
void DestructiblePartsSystemComponentUpdated()
```

### **DisabledHitGroupsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L129)

```csharp
void DisabledHitGroupsUpdated()
```

### **FadeMaxDistUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L116)

```csharp
void FadeMaxDistUpdated()
```

### **FadeMinDistUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L115)

```csharp
void FadeMinDistUpdated()
```

### **FadeScaleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L117)

```csharp
void FadeScaleUpdated()
```

### **GlowBackfaceMultUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L114)

```csharp
void GlowBackfaceMultUpdated()
```

### **GlowUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L113)

```csharp
void GlowUpdated()
```

### **NoInterpolateUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L111)

```csharp
void NoInterpolateUpdated()
```

### **ObjectCullingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L119)

```csharp
void ObjectCullingUpdated()
```

### **RenderAttributesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L109)

```csharp
void RenderAttributesUpdated()
```

### **RenderFXUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L107)

```csharp
void RenderFXUpdated()
```

### **RenderModeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L106)

```csharp
void RenderModeUpdated()
```

### **RenderToCubemapsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L110)

```csharp
void RenderToCubemapsUpdated()
```

### **RenderUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L108)

```csharp
void RenderUpdated()
```

### **RequiredDecalModeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L126)

```csharp
void RequiredDecalModeUpdated()
```

### **SetModel(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseModelEntity.cs#L9)

```csharp
void SetModel(string model)
```

- Parameters

- **model**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The model path to be used.

### **ShadowStrengthUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L118)

```csharp
void ShadowStrengthUpdated()
```

### **ViewOffsetUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseModelEntity.cs#L128)

```csharp
void ViewOffsetUpdated()
```

