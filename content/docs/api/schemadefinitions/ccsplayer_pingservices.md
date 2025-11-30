---
title: CCSPlayer_PingServices
---

# Interface CCSPlayer_PingServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_PingServices.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPlayer_PingServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CCSPlayer_PingServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPlayerPawnComponent](/docs/api/schemadefinitions/cplayerpawncomponent)
- [ISchemaClass<CPlayerPawnComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSPlayer_PingServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### PlayerPing

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_PingServices.cs#L21)

```csharp
ref CHandle<CPlayerPing> PlayerPing { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CPlayerPing](/docs/api/schemadefinitions/cplayerping)>

### PlayerPingTokens

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_PingServices.cs#L19)

```csharp
SchemaUntypedField PlayerPingTokens { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

## Methods

### PlayerPingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_PingServices.cs#L23)

```csharp
void PlayerPingUpdated()
```

