---
title: CCSPlayerController_InGameMoneyServices
---

# Interface CCSPlayerController_InGameMoneyServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPlayerController_InGameMoneyServices : CPlayerControllerComponent, ISchemaClass<CPlayerControllerComponent>, ISchemaClass<CCSPlayerController_InGameMoneyServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPlayerControllerComponent](/docs/api/schemadefinitions/cplayercontrollercomponent)
- [ISchemaClass<CPlayerControllerComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSPlayerController_InGameMoneyServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Account

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L22)

```csharp
ref int Account { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CashSpentThisRound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L28)

```csharp
ref int CashSpentThisRound { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MoneyEarnedForNextRound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L20)

```csharp
ref int MoneyEarnedForNextRound { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ReceivesMoneyNextRound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L18)

```csharp
ref bool ReceivesMoneyNextRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartAccount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L24)

```csharp
ref int StartAccount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TotalCashSpent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L26)

```csharp
ref int TotalCashSpent { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### AccountUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L30)

```csharp
void AccountUpdated()
```

### CashSpentThisRoundUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L33)

```csharp
void CashSpentThisRoundUpdated()
```

### StartAccountUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L31)

```csharp
void StartAccountUpdated()
```

### TotalCashSpentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L32)

```csharp
void TotalCashSpentUpdated()
```

