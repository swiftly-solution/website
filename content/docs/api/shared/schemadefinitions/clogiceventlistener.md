---
title: CLogicEventListener
---

```csharp
public interface CLogicEventListener : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CLogicEventListener>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### IsEnabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicEventListener.cs#L20)

```csharp
ref bool IsEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnEventFired

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicEventListener.cs#L24)

```csharp
CEntityIOOutput OnEventFired { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### StrEventName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicEventListener.cs#L18)

```csharp
string StrEventName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Team

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicEventListener.cs#L22)

```csharp
ref int Team { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

