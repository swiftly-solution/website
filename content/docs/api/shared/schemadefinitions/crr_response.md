---
title: CRR_Response
---

```csharp
public interface CRR_Response : ISchemaClass<CRR_Response>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AnyMatchingRulesInCooldown** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRR_Response.cs#L26)

```csharp
ref bool AnyMatchingRulesInCooldown { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Followup** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRR_Response.cs#L32)

```csharp
ResponseFollowup Followup { get; }
```

- Property Value

- [ResponseFollowup](/docs/api/shared/schemadefinitions/responsefollowup)

### **MatchScore** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRR_Response.cs#L24)

```csharp
ref float MatchScore { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MatchingRule** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRR_Response.cs#L20)

```csharp
string MatchingRule { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Params** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRR_Response.cs#L22)

```csharp
ResponseParams Params { get; }
```

- Property Value

- [ResponseParams](/docs/api/shared/schemadefinitions/responseparams)

### **RecipientFilter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRR_Response.cs#L35)

```csharp
SchemaUntypedField RecipientFilter { get; }
```

- Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **ResponseName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRR_Response.cs#L18)

```csharp
string ResponseName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SpeakerContext** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRR_Response.cs#L28)

```csharp
string SpeakerContext { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Type** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRR_Response.cs#L16)

```csharp
ref byte Type { get; }
```

- Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **WorldContext** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRR_Response.cs#L30)

```csharp
string WorldContext { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

