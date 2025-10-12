---
title: CCSPlayer_PingServices
---

```csharp
public interface CCSPlayer_PingServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CCSPlayer_PingServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### PlayerPing

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_PingServices.cs#L19)

```csharp
ref CHandle<CBaseEntity> PlayerPing { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### PlayerPingTokens

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_PingServices.cs#L17)

```csharp
SchemaUntypedField PlayerPingTokens { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

## Methods

### PlayerPingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_PingServices.cs#L21)

```csharp
void PlayerPingUpdated()
```

