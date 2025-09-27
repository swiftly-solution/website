---
title: SchemaUntypedField
---

```csharp
public class SchemaUntypedField : ISchemaClass<SchemaUntypedField>, ISchemaField, ISchemaClass, INativeHandle
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

**SchemaUntypedField(nint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/SchemaUntypedField.cs#L13)

```csharp
public SchemaUntypedField(nint handle)
```

#### Parameters

- **handle**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

## Properties

**Address** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/SchemaUntypedField.cs#L9)

```csharp
public nint Address { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

**IsValid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/SchemaUntypedField.cs#L11)

```csharp
public bool IsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

**From(nint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/SchemaUntypedField.cs#L17)

```csharp
public static SchemaUntypedField From(nint handle)
```

#### Parameters

- **handle**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**GetHandle()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/SchemaUntypedField.cs#L21)

```csharp
public nint GetHandle()
```

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The raw handle.

