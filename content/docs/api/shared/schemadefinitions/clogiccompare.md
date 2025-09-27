---
title: CLogicCompare
---

```csharp
public interface CLogicCompare : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CLogicCompare>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**CompareValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicCompare.cs#L18)

```csharp
ref float CompareValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**InValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicCompare.cs#L16)

```csharp
ref float InValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**OnEqualTo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicCompare.cs#L24)

```csharp
SchemaUntypedField OnEqualTo { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**OnGreaterThan** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicCompare.cs#L30)

```csharp
SchemaUntypedField OnGreaterThan { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**OnLessThan** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicCompare.cs#L21)

```csharp
SchemaUntypedField OnLessThan { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**OnNotEqualTo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicCompare.cs#L27)

```csharp
SchemaUntypedField OnNotEqualTo { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

