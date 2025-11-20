---
title: CPulse_RegisterInfo
---

```csharp
public interface CPulse_RegisterInfo : ISchemaClass<CPulse_RegisterInfo>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### LastReadByInstruction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_RegisterInfo.cs#L28)

```csharp
ref int LastReadByInstruction { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OriginName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_RegisterInfo.cs#L24)

```csharp
SchemaUntypedField OriginName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Reg

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_RegisterInfo.cs#L18)

```csharp
PulseRuntimeRegisterIndex_t Reg { get; }
```

#### Property Value

- [PulseRuntimeRegisterIndex_t](/docs/api/shared/schemadefinitions/pulseruntimeregisterindex_t)

### Type

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_RegisterInfo.cs#L21)

```csharp
SchemaUntypedField Type { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### WrittenByInstruction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_RegisterInfo.cs#L26)

```csharp
ref int WrittenByInstruction { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

