---
title: CTriggerSoundscape
---

```csharp
public interface CTriggerSoundscape : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerSoundscape>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Soundscape** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerSoundscape.cs#L16)

```csharp
ref CHandle<CEnvSoundscapeTriggerable> Soundscape { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEnvSoundscapeTriggerable](/docs/api/shared/schemadefinitions/cenvsoundscapetriggerable)>

**SoundscapeName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerSoundscape.cs#L18)

```csharp
ref CUtlSymbolLarge SoundscapeName { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**Spectators** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerSoundscape.cs#L20)

```csharp
ref CUtlVector<CHandle<CBasePlayerPawn>> Spectators { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)>>

