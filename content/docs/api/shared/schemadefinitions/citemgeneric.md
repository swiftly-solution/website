---
title: CItemGeneric
---

```csharp
public interface CItemGeneric : CItem, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CItem>, ISchemaClass<CItemGeneric>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AllowPickupScriptFunction** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L64)

```csharp
ref CUtlSymbolLarge AllowPickupScriptFunction { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**AmbientSoundEffect** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L32)

```csharp
ref CUtlSymbolLarge AmbientSoundEffect { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**AutoStartAmbientSound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L34)

```csharp
ref bool AutoStartAmbientSound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**GlowColor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L74)

```csharp
ref Color GlowColor { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

**GlowWhenInTrigger** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L72)

```csharp
ref bool GlowWhenInTrigger { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**HasPickupRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L18)

```csharp
ref bool HasPickupRadius { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**HasTriggerRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L16)

```csharp
ref bool HasTriggerRadius { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LastPickupCheck** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L24)

```csharp
GameTime_t LastPickupCheck { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**OnPickup** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L54)

```csharp
CEntityIOOutput OnPickup { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnTimeout** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L56)

```csharp
CEntityIOOutput OnTimeout { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnTriggerEndTouch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L62)

```csharp
CEntityIOOutput OnTriggerEndTouch { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnTriggerStartTouch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L58)

```csharp
CEntityIOOutput OnTriggerStartTouch { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnTriggerTouch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L60)

```csharp
CEntityIOOutput OnTriggerTouch { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**PickupFilter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L52)

```csharp
ref CHandle<CBaseFilter> PickupFilter { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseFilter](/docs/api/shared/schemadefinitions/cbasefilter)>

**PickupFilterName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L50)

```csharp
ref CUtlSymbolLarge PickupFilterName { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**PickupParticleEffect** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L38)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> PickupParticleEffect { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

**PickupRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L66)

```csharp
ref float PickupRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**PickupRadiusSqr** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L20)

```csharp
ref float PickupRadiusSqr { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**PickupScriptFunction** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L42)

```csharp
ref CUtlSymbolLarge PickupScriptFunction { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**PickupSoundEffect** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L40)

```csharp
ref CUtlSymbolLarge PickupSoundEffect { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**PlayerCounterListenerAdded** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L26)

```csharp
ref bool PlayerCounterListenerAdded { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PlayerInTriggerRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L28)

```csharp
ref bool PlayerInTriggerRadius { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SpawnParticleEffect** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L30)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> SpawnParticleEffect { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

**SpawnScriptFunction** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L36)

```csharp
ref CUtlSymbolLarge SpawnScriptFunction { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**TimeoutParticleEffect** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L44)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> TimeoutParticleEffect { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

**TimeoutScriptFunction** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L48)

```csharp
ref CUtlSymbolLarge TimeoutScriptFunction { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**TimeoutSoundEffect** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L46)

```csharp
ref CUtlSymbolLarge TimeoutSoundEffect { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**TriggerHelper** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L78)

```csharp
ref CHandle<CItemGenericTriggerHelper> TriggerHelper { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CItemGenericTriggerHelper](/docs/api/shared/schemadefinitions/citemgenerictriggerhelper)>

**TriggerRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L68)

```csharp
ref float TriggerRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TriggerRadiusSqr** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L22)

```csharp
ref float TriggerRadiusSqr { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TriggerSoundEffect** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L70)

```csharp
ref CUtlSymbolLarge TriggerSoundEffect { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**Useable** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemGeneric.cs#L76)

```csharp
ref bool Useable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

