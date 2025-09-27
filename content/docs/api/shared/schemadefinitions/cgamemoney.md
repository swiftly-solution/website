---
title: CGameMoney
---

```csharp
public interface CGameMoney : CRulePointEntity, CRuleEntity, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CRuleEntity>, ISchemaClass<CRulePointEntity>, ISchemaClass<CGameMoney>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Money** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameMoney.cs#L20)

```csharp
ref int Money { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**OnMoneySpent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameMoney.cs#L16)

```csharp
CEntityIOOutput OnMoneySpent { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnMoneySpentFail** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameMoney.cs#L18)

```csharp
CEntityIOOutput OnMoneySpentFail { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**StrAwardText** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameMoney.cs#L22)

```csharp
ref CUtlString StrAwardText { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

