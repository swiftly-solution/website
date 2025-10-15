---
title: CCSPlayerController_InGameMoneyServices
---

```csharp
public interface CCSPlayerController_InGameMoneyServices : CPlayerControllerComponent, ISchemaClass<CPlayerControllerComponent>, ISchemaClass<CCSPlayerController_InGameMoneyServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Account

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L21)

```csharp
ref int Account { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CashSpentThisRound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L27)

```csharp
ref int CashSpentThisRound { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MoneyEarnedForNextRound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L19)

```csharp
ref int MoneyEarnedForNextRound { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ReceivesMoneyNextRound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L17)

```csharp
ref bool ReceivesMoneyNextRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartAccount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L23)

```csharp
ref int StartAccount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TotalCashSpent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L25)

```csharp
ref int TotalCashSpent { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### AccountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L29)

```csharp
void AccountUpdated()
```

### CashSpentThisRoundUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L32)

```csharp
void CashSpentThisRoundUpdated()
```

### StartAccountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L30)

```csharp
void StartAccountUpdated()
```

### TotalCashSpentUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InGameMoneyServices.cs#L31)

```csharp
void TotalCashSpentUpdated()
```

