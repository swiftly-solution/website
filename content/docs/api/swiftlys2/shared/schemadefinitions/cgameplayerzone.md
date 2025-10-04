---
title: CGamePlayerZone
---

```csharp
public interface CGamePlayerZone : CRuleBrushEntity, CRuleEntity, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CRuleEntity>, ISchemaClass<CRuleBrushEntity>, ISchemaClass<CGamePlayerZone>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**OnPlayerInZone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGamePlayerZone.cs#L16)

```csharp
CEntityIOOutput OnPlayerInZone { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnPlayerOutZone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGamePlayerZone.cs#L18)

```csharp
CEntityIOOutput OnPlayerOutZone { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**PlayersInCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGamePlayerZone.cs#L21)

```csharp
SchemaUntypedField PlayersInCount { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**PlayersOutCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGamePlayerZone.cs#L24)

```csharp
SchemaUntypedField PlayersOutCount { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

