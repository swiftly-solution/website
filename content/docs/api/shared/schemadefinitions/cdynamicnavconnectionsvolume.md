---
title: CDynamicNavConnectionsVolume
---

```csharp
public interface CDynamicNavConnectionsVolume : CTriggerMultiple, CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerMultiple>, ISchemaClass<CDynamicNavConnectionsVolume>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ConnectionTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicNavConnectionsVolume.cs#L18)

```csharp
string ConnectionTarget { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Connections

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicNavConnectionsVolume.cs#L20)

```csharp
ref CUtlVector<DynamicVolumeDef_t> Connections { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[DynamicVolumeDef_t](/docs/api/shared/schemadefinitions/dynamicvolumedef_t)>

### ConnectionsEnabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicNavConnectionsVolume.cs#L24)

```csharp
ref bool ConnectionsEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxConnectionDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicNavConnectionsVolume.cs#L30)

```csharp
ref float MaxConnectionDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TargetAreaSearchRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicNavConnectionsVolume.cs#L26)

```csharp
ref float TargetAreaSearchRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TransitionType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicNavConnectionsVolume.cs#L22)

```csharp
ref CGlobalSymbol TransitionType { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### UpdateDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicNavConnectionsVolume.cs#L28)

```csharp
ref float UpdateDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

