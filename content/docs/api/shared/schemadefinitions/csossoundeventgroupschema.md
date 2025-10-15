---
title: CSosSoundEventGroupSchema
---

```csharp
public interface CSosSoundEventGroupSchema : ISchemaClass<CSosSoundEventGroupSchema>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Actions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L47)

```csharp
ref CUtlVector<PointerTo<CSosGroupActionSchema>> Actions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CSosGroupActionSchema](/docs/api/shared/schemadefinitions/csosgroupactionschema)>>

### Behavior_EntIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L35)

```csharp
ref SosGroupFieldBehavior_t Behavior_EntIndex { get; }
```

#### Property Value

- [SosGroupFieldBehavior_t](/docs/api/shared/schemadefinitions/sosgroupfieldbehavior_t)

### Behavior_EventName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L27)

```csharp
ref SosGroupFieldBehavior_t Behavior_EventName { get; }
```

#### Property Value

- [SosGroupFieldBehavior_t](/docs/api/shared/schemadefinitions/sosgroupfieldbehavior_t)

### Behavior_Opvar

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L39)

```csharp
ref SosGroupFieldBehavior_t Behavior_Opvar { get; }
```

#### Property Value

- [SosGroupFieldBehavior_t](/docs/api/shared/schemadefinitions/sosgroupfieldbehavior_t)

### Behavior_String

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L43)

```csharp
ref SosGroupFieldBehavior_t Behavior_String { get; }
```

#### Property Value

- [SosGroupFieldBehavior_t](/docs/api/shared/schemadefinitions/sosgroupfieldbehavior_t)

### BlockMaxCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L21)

```csharp
ref int BlockMaxCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BlocksEvents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L19)

```csharp
ref bool BlocksEvents { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EntIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L37)

```csharp
ref float EntIndex { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GroupType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L17)

```csharp
ref SosGroupType_t GroupType { get; }
```

#### Property Value

- [SosGroupType_t](/docs/api/shared/schemadefinitions/sosgrouptype_t)

### InvertMatch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L25)

```csharp
ref bool InvertMatch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MatchEventSubString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L31)

```csharp
ref bool MatchEventSubString { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MatchSoundEventName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L29)

```csharp
string MatchSoundEventName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MatchSoundEventSubString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L33)

```csharp
string MatchSoundEventSubString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MemberLifespanTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L23)

```csharp
ref float MemberLifespanTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Opvar

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L41)

```csharp
ref float Opvar { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OpvarString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L45)

```csharp
string OpvarString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

